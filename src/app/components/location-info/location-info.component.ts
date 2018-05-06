import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.css']
})
export class LocationInfoComponent {
  @Input() continent
  @Input() country
  @Input() capital
  @Input() flag
  @Input() ip
  @Input() text

  constructor() { }

}
