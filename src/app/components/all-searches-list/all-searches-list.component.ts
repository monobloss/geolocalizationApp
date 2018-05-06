import {Component} from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {Observable} from "rxjs/Observable";
import {IAppState} from "../../store/model";
import {GlobalActions} from "../../store/global/globalActions";

@Component({
  selector: 'app-all-searches-list',
  templateUrl: './all-searches-list.component.html',
  styleUrls: ['./all-searches-list.component.css']
})
export class AllSearchesListComponent {

  @select(['globalState', 'geoLocationInfo', 'lastSearchIpAddresses']) listOfPreviousSearches$: Observable<Array<string>>;
  constructor(private ngRedux: NgRedux<IAppState>, private globalActions: GlobalActions) { }

  showOnMap(ip) {
    return this.ngRedux.dispatch(this.globalActions.getGeoLocationInfo(ip, {isLoading: true, isReady: true}));
  }
  searchForUserLocation() {
    return this.ngRedux.dispatch(this.globalActions.getUserGeoLocationInfo({isLoading: true, isReady: true}));
  }
}
