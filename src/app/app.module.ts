import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagemComponent } from './imagem/imagem.component';
import { FrasesComponent } from './frases/frases.component';
import { BotaoComponent } from './botao/botao.component';
import { BiscoitoComponent } from './biscoito/biscoito.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagemComponent,
    FrasesComponent,
    BotaoComponent,
    BiscoitoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
