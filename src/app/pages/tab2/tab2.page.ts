import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TarefaService, Tarefa } from '../services/tarefa.service';

@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: false,
})
export class CriarTarefaPage {
  tarefa: Tarefa = {
    nome: '',
    disciplina: '',
    curso: '',
    tipo: '',
    dataLimite: '',
    prioridade: 'Média',
    status: 'Pendente',
  };

  constructor(private tarefaService: TarefaService, private router: Router) {}

  criarTarefa() {
    this.tarefaService.addTarefa(this.tarefa).then(() => {
      alert('Tarefa criada com sucesso!');
      this.router.navigate(['/tabs/tarefas']);
    });
  }
}
