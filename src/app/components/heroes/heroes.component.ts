import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesService} from '../../service/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesServices:HeroesService, private router:Router) {}

  verHeroe( i:number ){
    this.router.navigate(['/heroe',i]);
  }



  ngOnInit() {
    this.heroes = this._heroesServices.getHeroes();
  }

}
