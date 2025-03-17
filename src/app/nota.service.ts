import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotaService {
  notas: any[] =JSON.parse(localStorage.getItem('notas') || '[]');
  proximoId: number = this.notas.length > 0 ? Math.max(...this.notas.map(nota => nota.id)) + 1 : 1;

  getNotas() {
    return this.notas;
  }

  adicionarNota(nota: any) {
    nota.id = this.proximoId++;
    this.notas.push(nota);
    this.atualizarLocalStorage();
  }

  editarNota(nota: any) {
    const index = this.notas.findIndex(n => n.id === nota.id);
    this.notas[index] = nota;
    this.atualizarLocalStorage();
  }

  excluirNota(id: number) {
    this.notas = this.notas.filter(nota => nota.id !== id);
    this.atualizarLocalStorage();
  }

  private atualizarLocalStorage() {
    localStorage.setItem('notas', JSON.stringify(this.notas));
  }
}