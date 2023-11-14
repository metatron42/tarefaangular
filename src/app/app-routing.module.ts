import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';

const routes: Routes = [
{path:'', redirectTo: '/index', pathMatch: 'full'},
{path:"apolice-seguro", component: ApoliceSeguroComponent},
{path:"cadastro-aluno", component: CadastroAlunoComponent},
{path:"calculadora", component: CalculadoraComponent},
{path:"calcular-media", component: CalcularMediaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
