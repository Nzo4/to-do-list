import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterService } from './filter.service';

export interface Note {
  noteName: string,
  complite: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: Note[] = [];
  notesData$: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>(this.notes)

  constructor() { }

  add(note: Note) {
    this.notes.push(note);
    this.notesData$.next(this.notes);
    console.log(this.notes);
  }

  update(note: Note) {
    const findedNote = this.notes.find(n => n.noteName === note.noteName);
    if (findedNote) {
      this.notesData$.next(this.notes);
    }
  }

  delete(deleteNote: Note) {
    this.notes = this.notes.filter(n => n.noteName !== deleteNote.noteName);
    this.notesData$.next(this.notes);
  }


}


