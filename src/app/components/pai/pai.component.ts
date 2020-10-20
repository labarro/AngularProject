import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {
@Output() informacaoPai = "Nome: Julio"; //Pode ser um tipo, ex: informação: string
  constructor() { }

  ngOnInit() {
  }

}
