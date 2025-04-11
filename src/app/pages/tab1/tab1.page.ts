import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TarefaService, Tarefa } from '../services/tarefa.service';


@Component({
  selector: 'app-tarefas',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,

})
export class TarefasPage implements OnInit {
  tarefas: Tarefa[] = []; // Lista de tarefas

  constructor(private router: Router, private tarefaService: TarefaService) {}

  ngOnInit() {
    this.tarefaService.getTarefas().subscribe((tare: any) => {
      this.tarefas = tare;
    })
    this.carregarTarefas();
  }

  // Mock de carregamento de tarefas
  carregarTarefas() {
    this.tarefas = [
      {
        id: '1',
        nome: 'Estudar Angular',
        disciplina: 'Programação Web',
        curso: 'Desenvolvimento de Software',
        tipo: 'Atividade',
        dataLimite: '2025-04-20',
        prioridade: 'Alta',
        status: 'Pendente',
      },
      {
        id: '2',
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
  deleteTask(taskId: string) {
    this.tarefas = this.tarefas.filter((tarefa) => tarefa.id !== taskId);
  }
  
}
