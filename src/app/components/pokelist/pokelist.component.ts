import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit, OnChanges {

  // Get the value of the child component pokelist variable pokeName from the parent component pokesearch variable inputString
  @Input()
  pokeName: string = ""; 
  pokeList: Array<any> = [];
  tempList: Array<any> = [];

  constructor(private pokeServ: PokeService, private router: Router) { }
  

  ngOnInit(): void {
    this.pokeServ.getAllPokemon().subscribe(list => {
      this.pokeList = list.results;
      this.tempList = this.pokeList
      
      this.pokeList.sort((a: any, b: any) => a.name < b.name ? -1 : 1);
    })
  }

  ngOnChanges(){
    this.tempList = this.pokeList.filter((pokemon: any) => pokemon.name.includes(this.pokeName));
  }

 goToDetails(e: any){
   // assign the clicked pokemon name to the pokeName variable of the service
   this.pokeServ.pokeName = e.target.innerText.toLowerCase();
   // navigate to the pokedetails page.
   this.router.navigate(["/pokedetails"]);

 }

}
