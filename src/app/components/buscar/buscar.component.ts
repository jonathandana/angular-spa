import {Component, Input, OnInit} from '@angular/core';
import {Heroe, HeroesService} from '../../service/heroes.service';
import {ActivatedRoute} from '@angular/router';




@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {
    heroes: Heroe[] = [];
    buscador: string;
    @Input() heroe: any = {};
    @Input() index: number;

  constructor(private _heroesServices: HeroesService, private activatedRoute: ActivatedRoute ) {

  }

  ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
          this.buscador = params['termino'];
          this.heroes = this._heroesServices.buscarHeroes(params['termino']);
      });
  }

}
