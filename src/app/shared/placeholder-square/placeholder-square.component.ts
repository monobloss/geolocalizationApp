import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-placeholder-square',
  templateUrl: './placeholder-square.component.html',
  styleUrls: ['./placeholder-square.component.css']
})
export class PlaceholderSquareComponent implements OnInit {
  @Input() text
  constructor() { }

  ngOnInit() {
  }

}
