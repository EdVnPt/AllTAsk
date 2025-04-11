import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}

  // Cadastro de novo usuário
  async registerUser(nome: string, sobrenome: string, email: string, senha: string) {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, senha);
      
      // Salvar dados adicionais no Firestore
      await this.firestore.collection('users').doc(userCredential.user?.uid).set({
        nome,
        sobrenome,
        email,
      });
  
      console.log('Usuário cadastrado com sucesso!');
      return userCredential.user;
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      throw error; // Verifique aqui o texto do erro
    }
  }
  

  // Login do usuário
  async login(email: string, senha: string) {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, senha);
      console.log('Usuário logado com sucesso:', userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error('Erro no login:', error);
      throw error;
    }
  }
}
