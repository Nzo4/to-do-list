import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NotesService } from './notes.service';

export type State = {
  name: string,
  value: string
}

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  states: State[] = [
    { name: 'Все', value: 'all' },
    { name: 'Завершенные', value: 'completed' },
    { name: 'Незавершенные', value: 'uncompleted' }
  ];

  state$ = new BehaviorSubject<State>(this.states[0]);

  constructor(private notesService: NotesService) {

  }

  applyFilter(filterName: string) {
    let filteredNotes;
    switch (filterName) {
      case 'Завершенные':
        filteredNotes = this.notesService.notes.filter(note => note.complite);
        this.state$.next(this.states[1]);
        break;
      case 'Незавершенные':
        filteredNotes = this.notesService.notes.filter(note => !note.complite);
        this.state$.next(this.states[2]);
        break;
      default:
        filteredNotes = this.notesService.notes;
        this.state$.next(this.states[0]);
        break;
    }
    this.notesService.notesData$.next(filteredNotes);
  }

  updateState() {
    this.applyFilter(this.state$.value.name);
  }


}


