import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent {
  @Input() inteiro: boolean = true;
  biscoito: string = "../../assets/biscoito.png";
  quebrado: string = "../../assets/biscoito-quebrado.png";

}
