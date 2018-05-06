import {ILoadingIndicators} from "./ILoadingIndicators";
import {IGeoLocationApiResponse} from "./IGeoLocationApiResponse";

export interface IGeoLocationInfoState {
  currentIpAddress?: string;
  lastSearchIpAddresses?: Array<string>;
  currentGeoLocationInfo?: IGeoLocationApiResponse;
  lastGeoLocationInfo?: IGeoLocationApiResponse;
  userGeoLocationInfo?: IGeoLocationApiResponse;
  meta?: ILoadingIndicators;
}
