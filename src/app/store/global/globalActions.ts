
import {ILoadingIndicators} from "../interfaces/ILoadingIndicators";
import {IGeoLocationApiResponse} from "../interfaces/IGeoLocationApiResponse";

export class GlobalActions {
  static GET_GEO_LOCATION_INFO = 'GET_GEO_LOCATION_INFO';
  static GET_GEO_LOCATION_INFO_COMPLETED = 'GET_GEO_LOCATION_INFO_COMPLETED';
  static GET_GEO_LOCATION_INFO_FAILED = 'GET_GEO_LOCATION_INFO_FAILED';
  static GET_USER_GEO_LOCATION_INFO = "GET_USER_GEO_LOCATION_INFO";
  static GET_USER_GEO_LOCATION_INFO_COMPLETED = "GET_USER_GEO_LOCATION_INFO_COMPLETED";
  static GET_USER_GEO_LOCATION_INFO_FAILED = "GET_USER_GEO_LOCATION_INFO_FAILED"



  getGeoLocationInfo = (ip: string, loadingIndicators: ILoadingIndicators) => ({
    type: GlobalActions.GET_GEO_LOCATION_INFO,
    payload: ip,
    meta: loadingIndicators
  })
  getGeoLocationInfoCompleted = (geoLocationInfo: IGeoLocationApiResponse, loadingIndicators: ILoadingIndicators) => ({
    type: GlobalActions.GET_GEO_LOCATION_INFO_COMPLETED,
    payload: geoLocationInfo,
    meta: loadingIndicators
  })
  getGeoLocationInfoFailed = (loadingIndicators: ILoadingIndicators) => ({
    type: GlobalActions.GET_GEO_LOCATION_INFO_FAILED,
    meta: loadingIndicators
  })
  getUserGeoLocationInfo = (loadingIndicators: ILoadingIndicators) => ({
    type: GlobalActions.GET_USER_GEO_LOCATION_INFO,
    meta: loadingIndicators
  })
  getUserGeoLocationInfoCompleted = (geoLocationInfo: IGeoLocationApiResponse, loadingIndicators: ILoadingIndicators) => ({
    type: GlobalActions.GET_USER_GEO_LOCATION_INFO_COMPLETED,
    payload: geoLocationInfo,
    meta: loadingIndicators
  })
  getUserGeoLocationInfoFailed = (loadingIndicators: ILoadingIndicators) => ({
    type: GlobalActions.GET_USER_GEO_LOCATION_INFO_FAILED,
    meta: loadingIndicators
  })
}
