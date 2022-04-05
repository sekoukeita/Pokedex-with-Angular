import { Component, OnInit } from '@angular/core';
import { Pokemom as Pokemon } from 'src/app/models/Pokemon';
import { PokeService } from 'src/app/services/poke.service';
import { PokenavComponent } from '../pokenav/pokenav.component';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.css']
})
export class PokecardComponent implements OnInit {

  /* pokemon: Pokemon = {
    id: 25,
    name: "pikachu",
    sprites: {
      front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png"
    },
    abilities: [{
      ability: {
        name: "Thunder"
      }
    }, 
    {
      ability: {
        name: "Quick Attack"
      }
    }]
  } */

  pokemon: Pokemon= {} as Pokemon;

  img: string = "";

  constructor(private pokeServ: PokeService) { }

  ngOnInit(): void {
    // when an observable is called, it is followed by .subscribe(call back function)
    this.pokeServ.getOnePokemon().subscribe(poke => {
      this.pokemon = poke;
      this.img = this.pokemon.sprites.front_shiny;
    })
  }

  toggle(){
    if(this.img === this.pokemon.sprites.front_default){
      this.img = this.pokemon.sprites.front_shiny;
    }
    else{
      this.img = this.pokemon.sprites.front_default
    }
  }
}
