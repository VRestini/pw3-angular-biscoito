import { Component } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent {
  ligad: boolean = true;
  deslig: boolean = false;

  clique(){
    if (this.ligad == true ){
      this.ligad = false;
      this.deslig = true
    }
    else{
      this.ligad = true;
      this.deslig = false;
    }
  }
}
