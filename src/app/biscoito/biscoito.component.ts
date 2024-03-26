import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-biscoito',
  templateUrl: './biscoito.component.html',
  styleUrls: ['./biscoito.component.css']
})
export class BiscoitoComponent {
  @Input()verifImg: boolean = true;
  @Input() verifTxt: boolean= true;
  @Input() inteiro: boolean = true;

  quebrar(){
    this.verifImg=false;
    this.verifTxt=false;


  }

  reiniciar(){
    this.verifImg = true;
    this.verifTxt = true;
  }

}
