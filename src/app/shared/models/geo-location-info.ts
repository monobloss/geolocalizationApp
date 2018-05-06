import {IGeoLocationApiResponse} from "../../store/interfaces/IGeoLocationApiResponse";

export class GeoLocationInfo {
  public locationInfo: IGeoLocationApiResponse
  public locationLat: number
  public locationLng: number
  public continentName: string
  public countryName: string
  public capitalName: string
  public countryFlag: string
  public ip: string

  constructor(apiResponse: IGeoLocationApiResponse) {
    this.locationInfo = apiResponse;
    this.locationLat = apiResponse.latitude;
    this.locationLng = apiResponse.longitude;
    this.continentName = apiResponse.continent_name;
    this.ip = apiResponse.ip;
    this.countryName = apiResponse.country_name;
    this.capitalName = apiResponse.location.capital;
    this.countryFlag = apiResponse.location.country_flag;
  }

}
