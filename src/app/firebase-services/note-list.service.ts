import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore, collection, doc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Note } from '../interfaces/note.interface';



@Injectable({
  providedIn: 'root'
})
export class NoteListService {
  trashNotes: Note [] = [];
  normalNotes: Note [] = [];


items$;  firestore: Firestore = inject(Firestore);

  constructor() { 
    this.items$ = collectionData(this.getNotesRef());
  }
 
  getNotesRef(){
    return collection(this.firestore, 'notes');
  }

  getTrashRef(){
    return collection(this.firestore, 'trash');
  }
 
  getSingleDocRef(colId:string, docId:string){
    return doc(collection(this.firestore, colId), docId);
  }

}
