import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../service/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService ) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = heroesService.getHeroe(params['id']);
    });
  }

  ngOnInit() {}


}
