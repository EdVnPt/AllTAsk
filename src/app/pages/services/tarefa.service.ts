import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  collectionData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Tarefa {
  id?: string;
  nome: string;
  disciplina: string;
  curso: string;
  tipo: string;
  dataLimite: string;
  prioridade: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private tarefasCollection = collection(this.firestore, 'tarefas');

  constructor(private firestore: Firestore) {}

  getTarefas(): Observable<Tarefa[]> {
    return collectionData(this.tarefasCollection, {
      idField: 'id',
    }) as Observable<Tarefa[]>;
  }

  addTarefa(tarefa: Tarefa) {
    return addDoc(this.tarefasCollection, tarefa);
  }

  deleteTarefa(id: string) {
    const tarefaDocRef = doc(this.firestore, `tarefas/${id}`);
    return deleteDoc(tarefaDocRef);
  }

  updateTarefa(id: string, tarefa: Partial<Tarefa>) {
    const tarefaDocRef = doc(this.firestore, `tarefas/${id}`);
    return updateDoc(tarefaDocRef, tarefa);
  }
}
