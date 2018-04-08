import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DogService } from '../../services/dog.service';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  _dogBreeds: Array<string> = [];
  _searchBreeds: Array<string> = [];
  _searchInput: "";

  constructor(
    public navCtrl: NavController,
    public dogService: DogService) {
    this.getBreeds();
  }

  getBreeds() {
    this.dogService.getDogBreeds().subscribe(
      res => {
        console.log(res);
        this._dogBreeds = res.message;
        this._searchBreeds = res.message;
      },
      err => {
        console.log(err);
      }
    );
  }

  goToSubBreeds(breed: string) {
    this.navCtrl.push(DetailsPage, { breedName: breed })
  }

  search(){
    console.log(this._searchInput)
    this._searchBreeds = this._dogBreeds.filter(
      item => {
        if(item.toLowerCase().includes(this._searchInput.toLowerCase())){
          return item;
        }
      }
    )
  }

}
