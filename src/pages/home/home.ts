import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapServiceProvider } from "../../providers/map-service/map-service";
import { ListPage } from "../list/list";
import { LatLng } from "@ionic-native/google-maps";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;  
  
  constructor(
    public navCtrl: NavController,
    private mapServiceProvider: MapServiceProvider
  ) {}

  ionViewWillEnter() {
    this.mapServiceProvider.setDiv(this.mapElement.nativeElement).then(() => {
      //add markers, polyline, etc.
      this.mapServiceProvider.map.addMarker({
        position: new LatLng(0,0)
      });
    });
  }

  openList(){
    this.navCtrl.push(ListPage);
  }
}
