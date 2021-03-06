import { Injectable, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { GoogleMaps, GoogleMap, GoogleMapsEvent } from "@ionic-native/google-maps";

/*
  Generated class for the MapServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MapServiceProvider {

  map: GoogleMap;

  constructor(
    private googleMaps: GoogleMaps
  ) {
    console.log('Hello MapServiceProvider Provider');
  }

  setDiv(el: HTMLElement): Promise<any> {
    return new Promise<any>((resolve) => {
      if(!this.map && el != null){
        this.map = this.googleMaps.create(el);
        this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
          resolve();
        });
      } else {
        this.map.clear();
        this.map.setDiv(el);
        resolve();
      }
    });
  }
}
