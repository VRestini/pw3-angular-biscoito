import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent {
  arrayFrases: Array<string> = ["Se expressarmos gratidão pelo que temos, teremos mais por que expressar gratidão."
  , "Tenho uma profunda gratidão por cada lição que aprendi no passado. Afinal, foram elas que me permitiram chegar até aqui!"
  , "A vida reserva surpresas maravilhosas para todos aqueles que cultivam a gratidão!"
  , "Com o coração cheio de gratidão, sei que sou capaz de superar qualquer obstáculo que a vida apresentar!"
  , "A gratidão é uma grande aliada do sucesso!"
  , "Só há felicidade se não exigirmos nada do amanhã e aceitarmos do hoje, com gratidão, o que nos trouxer. A hora mágica chega sempre."
  , "Sucesso é um esporte coletivo. Demonstre gratidão a todos os que colaboram com suas vitórias."
  , "Vamos agradecer aos idiotas. Não fosse por eles não faríamos tanto sucesso."
  , "A melhor maneira de agradecer por um belo momento é desfrutá-lo plenamente."
  , "A gratidão é o único tesouro dos humildes"];
  lig: boolean = false;
  min: number = 0;
  max: number = 9;
  valor = Math.floor(Math.random() * (this.max - this.min + 1)) +this.min;

}
