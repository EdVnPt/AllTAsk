import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Importa o AlertController
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: false
})
export class CadastroPage {
  nome = '';
  sobrenome = '';
  email = '';
  senha = '';

  constructor(
    private firebaseService: FirebaseService,
    private router: Router, // Injeta o Router
    private alertController: AlertController // Injeta o AlertController
  ) {}

  async register() {
    try {
      // Chama o serviço para cadastrar o usuário
      await this.firebaseService.registerUser(this.nome, this.sobrenome, this.email, this.senha);

      // Exibe mensagem de sucesso
      this.showAlert('Cadastro Realizado!', 'Seu cadastro foi realizado com sucesso.');

      // Redireciona para a tela de login após o cadastro
      this.router.navigate(['/tabs/login']);
    } catch (error) {
      // Exibe mensagem de erro
      this.showAlert('Erro no Cadastro', 'Houve um erro ao tentar realizar o cadastro. Verifique seus dados e tente novamente.');
    }
  }

  // Método para exibir mensagens de sucesso ou erro
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'], // Botão para fechar a mensagem
    });

    await alert.present();
  }

  // Método para redirecionar à tela de login
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
