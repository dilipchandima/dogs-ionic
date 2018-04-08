import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  _breed: string = "";
  _subBreeds: Array<string> = [];
  _imgUrl = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dogService: DogService) {

    this._breed = this.navParams.get("breedName");
    this.getImage();
    this.getSubBreeds()
  }

  getSubBreeds() {
    this.dogService.getSubBreeds(this._breed).subscribe(
      res => {
        console.log(res);
        this._subBreeds = res.message;
      },
      err => {
        console.log(err);
      }
    );
  }

  getImage() {
    this.dogService.getImage(this._breed).subscribe(
      res => {
        console.log(res);
        this._imgUrl = res.message;
      },
      err => {
        console.log(err);
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
