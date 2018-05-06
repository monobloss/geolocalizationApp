import {Component, OnInit} from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {GlobalActions} from "../../store/global/globalActions";
import {IAppState} from "../../store/model";
import {SubscriberComponent} from "../../shared/subscriber.component";
import {IGeoLocationApiResponse, IGeoLocationInfoModel} from "../../store/interfaces/IGeoLocationApiResponse";
import {GeoLocationInfo} from "../../shared/models/geo-location-info";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-geo-localizer',
  templateUrl: './geo-localizer.component.html',
  styleUrls: ['./geo-localizer.component.css'],
})
export class GeoLocalizerComponent extends SubscriberComponent implements OnInit {
  @select(['globalState', 'geoLocationInfo', 'meta', 'isLoading']) isLoading$: Observable<boolean>
  public ipAddress: string
  public currentLocationInfo: IGeoLocationInfoModel
  public lastLocationInfo: IGeoLocationInfoModel

  constructor(private ngRedux: NgRedux<IAppState>, private globalActions: GlobalActions) {
      super()
      this.subscriptions.push(
        ngRedux.select(['globalState', 'geoLocationInfo', 'lastGeoLocationInfo'])
          .subscribe( (res: IGeoLocationApiResponse) => {
            if (res !== undefined) {
              this.lastLocationInfo = new GeoLocationInfo(res);
            }
          }),
        ngRedux.select(['globalState', 'geoLocationInfo', 'currentGeoLocationInfo'])
          .subscribe( (res: IGeoLocationApiResponse) => {
            if (res !== undefined) {
              this.currentLocationInfo = new GeoLocationInfo(res);
            }
          }),
      );
  }
  ngOnInit() {
  }
  searchForLocation(ip: string) {
      return this.ngRedux.dispatch(this.globalActions.getGeoLocationInfo(ip, {isLoading: true, isReady: true}))
  }

}
