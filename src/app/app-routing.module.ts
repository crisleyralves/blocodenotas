import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaNotasComponent } from './lista-notas/lista-notas.component';

const routes: Routes = [
    { path: '', component: ListaNotasComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }