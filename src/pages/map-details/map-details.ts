import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { MapServiceProvider } from "../../providers/map-service/map-service";
import { LatLng } from "@ionic-native/google-maps";

/**
 * Generated class for the MapDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-map-details',
  templateUrl: 'map-details.html',
})
export class MapDetailsPage {
  
  @ViewChild('mapDetails') mapElement: ElementRef;  
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private mapServiceProvider: MapServiceProvider,
    private plt: Platform
  ) { }

  ionViewDidEnter() {
    this.plt.ready().then(() => {
      console.log('ionViewDidEnter Map Details');
      setTimeout(this.loadMap.bind(this), 1000);
    });
  }

  loadMap(){
    this.mapServiceProvider.setDiv(this.mapElement.nativeElement).then(() => {
      //add markers, polyline, etc.
      this.mapServiceProvider.map.addMarker({
        position: new LatLng(0,0)
      });
      
      this.mapServiceProvider.map.animateCameraZoomIn();
    });
  }
}
