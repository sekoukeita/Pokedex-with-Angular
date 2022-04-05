import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokesearchComponent } from './pages/pokesearch/pokesearch.component';
import { PokedetailsComponent } from './pages/pokedetails/pokedetails.component';
import { PokelistComponent } from './components/pokelist/pokelist.component';
import { PokenavComponent } from './components/pokenav/pokenav.component';
import { PokecardComponent } from './components/pokecard/pokecard.component';
import {HttpClientModule} from '@angular/common/http' // This import is needed for http request
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PokesearchComponent,
    PokedetailsComponent,
    PokelistComponent,
    PokenavComponent,
    PokecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // This module is needed for routing
    HttpClientModule, // This module is needed for http request
    FormsModule // This is needed to use [(ngModule)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
