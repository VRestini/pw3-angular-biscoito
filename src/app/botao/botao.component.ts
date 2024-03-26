import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent {
  @Input() inteiroa: boolean = true;
  @Input() inteirob: boolean = true;
  ligad: boolean = true;
  deslig: boolean = false;


}
