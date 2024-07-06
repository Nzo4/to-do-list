import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { NotesService } from 'src/app/services/notes.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  findNote: string = '';
  appliedTheme: boolean = false;

  constructor(
    private notesService: NotesService,
    private filterService: FilterService,
    private themeService: ThemeService
  ) { }

  findingNote() {
    if (this.findNote === '') {
      this.filterService.updateState();
      this.notesService.notesData$.next(this.notesService.notes)
    } else {
      const findedNote = this.notesService.notes.filter(note => note.noteName === this.findNote)
      this.notesService.notesData$.next(findedNote);
    }
  }

  changeTheme() {
    this.appliedTheme = !this.appliedTheme;
    if (this.appliedTheme === true) {
      this.themeService.apply('dark');
    } else {
      this.themeService.apply('light')
    }

  }



}
