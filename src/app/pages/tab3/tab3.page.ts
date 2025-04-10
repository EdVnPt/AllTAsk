import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false
})
export class PerfilPage implements OnInit {
  usuario = {
    nome: 'João Silva',
    email: 'joao.silva@email.com',
    telefone: '555-555-5555',
  };

  constructor() {}

  ngOnInit() {
    this.carregarPerfil(); // Inicializa os dados do perfil
  }

  // Mock para carregar os dados do perfil
  carregarPerfil() {
    // Simula uma chamada para buscar os dados do usuário
    console.log('Perfil carregado:', this.usuario);
  }

  // Salvar alterações no perfil
  atualizarPerfil() {
    // Simula a atualização dos dados
    console.log('Perfil atualizado:', this.usuario);
    alert('Perfil atualizado com sucesso!');
  }
}
