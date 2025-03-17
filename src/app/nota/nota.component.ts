import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})

export class NotaComponent {
  @Input() nota: any;
  @Output() editar = new EventEmitter<any>();
  @Output() excluir = new EventEmitter<any>();

  editarNota() {
    this.editar.emit(this.nota);
  }

  excluirNota() {
    this.excluir.emit(this.nota.id);
  }
}