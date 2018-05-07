import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.css']
})
export class LocationInfoComponent {
  @Input() continent: string
  @Input() country: string
  @Input() capital: string
  @Input() flag: string
  @Input() ip: string
  @Input() text: string

  constructor() { }

}
