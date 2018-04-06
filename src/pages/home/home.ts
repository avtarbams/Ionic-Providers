import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {MarvelProvider} from "../../providers/marvel/marvel";
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myData: any;





  constructor(public navCtrl: NavController, public marvelDataProvider: MarvelProvider, private modalController:ModalController) {

  }
  ngOnInit(){
    this.getMovies();
  }
  getMovies() {
    this.myData = this.marvelDataProvider.getMoviesDetails();

  }
  openModal(movie){
    let obj = {moviename: movie.FilmName, hero: movie.Superhero, year: movie.Year, actor: movie.Actor, dir: movie.Director};
    let openPopUp = this.modalController.create(ModalPage,obj);
    openPopUp.present();
  }

}
