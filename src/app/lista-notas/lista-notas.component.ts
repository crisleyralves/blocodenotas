import { Component, OnInit } from '@angular/core';
import { NotaService } from '../nota.service';
import { NotaComponent } from '../nota/nota.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.css'],
  imports: [NotaComponent, FormsModule, CommonModule]
})
export class ListaNotasComponent implements OnInit {
  notas: any[] = [];
  notaSelecionada: any = null;

  constructor(private notaService: NotaService) {}

  ngOnInit() {
    this.notas = this.notaService.getNotas();
  }

  adicionarNota() {
    this.notaSelecionada = { titulo: '', conteudo: '' };
  }

  editarNota(nota: any) {
    this.notaSelecionada = { ...nota };
  }

  excluirNota(id: number) {
    this.notaService.excluirNota(id);
    this.notas = this.notaService.getNotas();
  }

  salvarNota(nota: any) {
    if (nota.id) {
      this.notaService.editarNota(nota);
    } else {
      this.notaService.adicionarNota(nota);
    }
    this.notaSelecionada = null;
    this.notas = this.notaService.getNotas();
  }
}