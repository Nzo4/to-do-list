import { Component, Input } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { Note, NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  @Input() note!: Note;
  isUpdated: boolean = true;
  constructor(
    private notesService: NotesService,
    private filterService: FilterService
  ) { }

  delete() {
    this.notesService.delete(this.note);
  }
  update() {
    if (this.isUpdated) {
      this.isUpdated = false;
    } else {
      this.isUpdated = true;
    }

  }

  onComplete() {
    if (!this.note.complite) {
      this.note.complite = true;
      this.filterService.updateState();
    } else {
      this.note.complite = false;
      this.filterService.updateState();
    }
  }

}
