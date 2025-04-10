import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarefas',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,

})
export class TarefasPage implements OnInit {
  tarefas: any[] = []; // Lista de tarefas

  constructor(private router: Router) {}

  ngOnInit() {
    this.carregarTarefas(); // Carrega as tarefas quando a página for inicializada
  }

  // Mock de carregamento de tarefas
  carregarTarefas() {
    this.tarefas = [
      {
        id: 1,
        nome: 'Estudar Angular',
        disciplina: 'Programação Web',
        curso: 'Desenvolvimento de Software',
        tipo: 'Atividade',
        dataLimite: '2025-04-20',
        prioridade: 'Alta',
        status: 'Pendente',
      },
      {
        id: 2,
        nome: 'Trabalho de Física',
        disciplina: 'Física',
        curso: 'Engenharia',
        tipo: 'Trabalho',
        dataLimite: '2025-04-18',
        prioridade: 'Média',
        status: 'Pendente',
      },
    ];
  }

  // Função para excluir uma tarefa
  deleteTask(taskId: number) {
    this.tarefas = this.tarefas.filter((tarefa) => tarefa.id !== taskId);
    alert(`Tarefa com ID ${taskId} foi excluída.`);
  }
}
