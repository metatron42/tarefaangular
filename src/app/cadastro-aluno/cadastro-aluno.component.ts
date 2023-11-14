import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css'],
})
export class CadastroAlunoComponent {
  nome: string = '';
  email: string = '';
  ra: string = '';
  cel: string = '';
  erroPreenchimento: boolean = false;
  mostrarDados: boolean = false;

  verificarPreenchimento() {
    if (!this.nome || !this.email || !this.ra || !this.cel) {
      this.erroPreenchimento = true;
      this.mostrarDados = false;
    } else {
      this.erroPreenchimento = false;
      this.mostrarDados = true;
    }
  }
}
