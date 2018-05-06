import { Injectable } from '@angular/core';
import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import {GlobalEpics} from "./global/globalEpics";

@Injectable()
export class RootEpics {
  constructor(private globalEpics: GlobalEpics) {
  }

  public createEpics() {
    return [
      createEpicMiddleware(combineEpics(
        this.globalEpics.getGeoLocationInfoEpic(),
        this.globalEpics.getUserGeoLocationInfoEpic()
      ))
    ];
  }
}

