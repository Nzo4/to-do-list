import { Component, OnInit } from '@angular/core';
import { Note, NotesService } from 'src/app/services/notes.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  currentTheme: string = '';
  constructor(public notesService: NotesService, private themeService: ThemeService) {
    this.themeService.applied$.subscribe((theme) => this.currentTheme = theme)
  }

  ngOnInit(): void {
    this.notesService.notesData$.subscribe((notes) => {
      this.notes = notes;
    })
  }




}
