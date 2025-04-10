import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: false
})
export class LoginPage {
    email = '';
    senha = '';
  
    constructor(private firebaseService: FirebaseService, private router: Router) {}
  
    async login() {
      try {
        await this.firebaseService.login(this.email, this.senha);
        this.router.navigate(['/tarefas']);
      } catch (error) {
        alert('Erro ao realizar login.');
      }
    }
    async loginWithFacebook() {
      // Implementação futura para login via Facebook
      alert('Login com Facebook ainda não implementado!');
    }
  
    async loginWithGoogle() {
      // Implementação futura para login via Google
      try {
        alert('Login com Google ainda não implementado!');

      } catch (error) {
        alert('Errozao!');
      }
    }
  
    async loginWithApple() {
      // Implementação futura para login via Apple
      alert('Login com Apple ainda não implementado!');
    }
  
    goToCadastro() {
      this.router.navigate(['/cadastro']);
    }
    //Ainda não feita
    goToEsqueciSenha() {
      this.router.navigate(['/esqueci-senha']);
    }
}
