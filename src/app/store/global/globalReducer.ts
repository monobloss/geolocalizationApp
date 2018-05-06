import { Reducer, combineReducers } from 'redux';
import { GlobalActions } from './globalActions';
import { ISimpleReduxAction } from '../interfaces/ISimpleReduxAction';
import {IGeoLocationInfoState} from "../interfaces/IGeoLocationInfoState";

const GeoLocationInfoReducer: Reducer<IGeoLocationInfoState> = (state = {}, action: ISimpleReduxAction): IGeoLocationInfoState => {
  switch (action.type) {
    case GlobalActions.GET_GEO_LOCATION_INFO:
      if (state.lastSearchIpAddresses === undefined) {
        return {...state, lastSearchIpAddresses: [action.payload], currentIpAddress: action.payload, meta: action.meta};
      } else {
        return {
          ...state,
          lastSearchIpAddresses: state.lastSearchIpAddresses.concat(action.payload),
          currentIpAddress: action.payload,
          meta: action.meta
        };
      }
    default:
      break;
  }
  switch (action.type) {
    case GlobalActions.GET_GEO_LOCATION_INFO_COMPLETED:
      if (state.lastGeoLocationInfo === undefined) {
        return {
          ...state,
          currentGeoLocationInfo: action.payload,
          lastGeoLocationInfo: action.payload,
          meta: action.meta
        };
      } else {
        return {
          ...state,
          lastGeoLocationInfo: state.currentGeoLocationInfo,
          currentGeoLocationInfo: action.payload,
          meta: action.meta
        };
      }
    default:
      break;
  }
  switch (action.type) {
    case GlobalActions.GET_USER_GEO_LOCATION_INFO_COMPLETED:
      if (state.lastGeoLocationInfo === undefined) {
        return {
          ...state,
          currentGeoLocationInfo: action.payload,
          lastGeoLocationInfo: action.payload,
          meta: action.meta
        };
      } else {
        return {
          ...state,
          lastGeoLocationInfo: state.currentGeoLocationInfo,
          currentGeoLocationInfo: action.payload,
          meta: action.meta
        };
      }
    default:
      break;
  }
  switch (action.type) {
    case GlobalActions.GET_GEO_LOCATION_INFO_FAILED:
      return {...state, meta: action.meta};
    default:
      break;
  }
  switch (action.type) {
    case GlobalActions.GET_USER_GEO_LOCATION_INFO:
      return {...state, meta: action.meta};
    default:
      break;
  }
  switch (action.type) {
    case GlobalActions.GET_USER_GEO_LOCATION_INFO_FAILED:
      return {...state, meta: action.meta};
    default:
      break;
  }
  return state;
}

export const GlobalReducer = combineReducers(
  {
    geoLocationInfo: GeoLocationInfoReducer,
  }
);
