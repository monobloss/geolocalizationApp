import {Component, Input, OnInit} from '@angular/core';
import {IAppState} from "../../store/model";
import {NgRedux} from "@angular-redux/store";
import {GlobalActions} from "../../store/global/globalActions";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() heading
  @Input() description
  @Input() primaryBtnTxt
  @Input() secondaryBtnTxt
  public modalVisible = true;
  constructor(private ngRedux: NgRedux<IAppState>, private globalActions: GlobalActions) { }

  ngOnInit() {
  }
  toggleModal() {
    this.modalVisible = !this.modalVisible;
  }
  searchForUserLocation() {
    this.toggleModal()
    return this.ngRedux.dispatch(this.globalActions.getUserGeoLocationInfo({isLoading: true, isReady: true}));
  }
}
