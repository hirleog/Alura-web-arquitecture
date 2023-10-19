import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: any = [

  ];

  constructor(private PensamentoService: PensamentoService) { }

  ngOnInit(): void {
    this.listar();

  }

  listar() {
    this.PensamentoService.listar().subscribe(res => {
      this.listaPensamentos = res;
    })
  };

}
