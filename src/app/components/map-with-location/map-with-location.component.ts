import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-map-with-location',
  templateUrl: './map-with-location.component.html',
  styleUrls: ['./map-with-location.component.css']
})
export class MapWithLocationComponent {
  @Input() lat: number
  @Input() lng: number
  @Input() text: string
  @Input() title: string
  @Input() ip: string

  constructor() {}

}
