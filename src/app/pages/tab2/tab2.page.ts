import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: false,
})
export class CriarTarefaPage {
  task = {
    nome: '',
    disciplina: '',
    curso: '',
    tipo: '',
    dataLimite: '',
    prioridade: '',
    status: '',
  };

  tarefas = [];

  constructor(private navCtrl: NavController) {}

  createTask() {
    // Adiciona a tarefa ao array de tarefas
    //this.tarefas.push({ ...this.task });

    // Limpa o formulário
    this.task = {
      nome: '',
      disciplina: '',
      curso: '',
      tipo: '',
      dataLimite: '',
      prioridade: '',
      status: '',
    };

    // Exibe uma mensagem de sucesso ou navega para outra página
    console.log('Tarefa criada com sucesso:', this.tarefas);
    this.navCtrl.navigateBack('../tabs1/tab1'); // Redireciona para a página de tarefas
  }
}
