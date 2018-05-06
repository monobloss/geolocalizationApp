interface IGeoLocationApiResponseLanguage {
  code: string;
  name: string;
  native: string;
}

interface IGeoLocationApiResponseLocation {
  geoname_id?: any;
  capital: string;
  languages: IGeoLocationApiResponseLanguage[];
  country_flag: string;
  country_flag_emoji: string;
  country_flag_emoji_unicode: string;
  calling_code: string;
  is_eu: boolean;
}

interface IGeoLocationApiResponse {
  ip: string;
  type: string;
  continent_code: string;
  continent_name: string;
  country_code: string;
  country_name: string;
  region_code?: any;
  region_name?: any;
  city?: any;
  zip?: any;
  latitude: number;
  longitude: number;
  location: IGeoLocationApiResponseLocation;
}
interface IGeoLocationInfoModel {
  locationInfo: IGeoLocationApiResponse;
  locationLat: number;
  locationLng: number;
  continentName: string;
  countryName: string;
  capitalName: string;
  countryFlag: string;
  ip: string;
}

export {
  IGeoLocationApiResponse,
  IGeoLocationApiResponseLanguage,
  IGeoLocationApiResponseLocation,
  IGeoLocationInfoModel
};
