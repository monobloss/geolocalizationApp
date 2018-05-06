import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-map-with-location',
  templateUrl: './map-with-location.component.html',
  styleUrls: ['./map-with-location.component.css']
})
export class MapWithLocationComponent {
  @Input() lat
  @Input() lng
  @Input() text
  @Input() title
  @Input() ip

  constructor() {}

}
