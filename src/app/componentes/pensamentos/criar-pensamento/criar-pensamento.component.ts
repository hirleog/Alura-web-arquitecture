import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    conteudo: 'Aprendendo angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  constructor(
    public route: Router,
    private PensamentoService: PensamentoService
  ) { }

  ngOnInit(): void {
  }
  criarPensamento() {
    this.PensamentoService.criar(this.pensamento).subscribe();
    this.route.navigate(['/listarPensamento']);
  }
  cancelar() {
    alert("Ação cancelada!");
    this.route.navigate(['/listarPensamento']);
  }

}
