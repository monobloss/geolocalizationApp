import { Epic, ActionsObservable } from 'redux-observable';
import { Injectable } from '@angular/core';
import { GlobalActions } from './globalActions';
import { IAppState } from '../model';
import { ISimpleReduxAction } from '../interfaces/ISimpleReduxAction';
import {MiddlewareAPI} from "redux";
import {Observable} from "rxjs/Observable";
import {GeoLocationService} from "../../core/geo-location.service";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {IGeoLocationApiResponse} from "../interfaces/IGeoLocationApiResponse";




@Injectable()
export class GlobalEpics {
  constructor(private geoLocationService: GeoLocationService, private globalActions: GlobalActions) {
  }

  getGeoLocationInfoEpic(): Epic<any, IAppState> {
    return (action$: ActionsObservable<ISimpleReduxAction>, store: MiddlewareAPI<IAppState>) =>
      action$
        .ofType(GlobalActions.GET_GEO_LOCATION_INFO)
        .filter(() => store.getState().globalState.geoLocationInfo.currentIpAddress !== undefined)
        .switchMap(() =>
          this.geoLocationService
            .fetchGeoLocation(store.getState().globalState.geoLocationInfo.currentIpAddress)
            .map((payload: IGeoLocationApiResponse) =>
              this.globalActions.getGeoLocationInfoCompleted(payload, {
                isLoading: false,
                isReady: true,
              })
            )
            .catch(error =>
              Observable.of(
                this.globalActions.getGeoLocationInfoFailed({
                  isLoading: false,
                  isReady: false,
                })
              )
            )
        );
  }
  getUserGeoLocationInfoEpic(): Epic<any, IAppState> {
    return (action$: ActionsObservable<ISimpleReduxAction>, store: MiddlewareAPI<IAppState>) =>
      action$
        .ofType(GlobalActions.GET_USER_GEO_LOCATION_INFO)
        .filter(() => store.getState().globalState.geoLocationInfo !== undefined)
        .switchMap(() =>
          this.geoLocationService
            .fetchUserGeoLocation()
            .map((payload: IGeoLocationApiResponse) =>
              this.globalActions.getUserGeoLocationInfoCompleted(payload, {
                isLoading: false,
                isReady: true,
              })
            )
            .catch(error =>
              Observable.of(
                this.globalActions.getUserGeoLocationInfoFailed({
                  isLoading: false,
                  isReady: false,
                })
              )
            )
        );
  }
  }
