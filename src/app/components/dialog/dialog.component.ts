import { Component, HostListener, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';
import { FilterService } from 'src/app/services/filter.service';
import { NotesService } from 'src/app/services/notes.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  dialogState: boolean = false;
  noteName: string = '';
  constructor(
    private dialogService: DialogService,
    private notesService: NotesService,
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
    this.dialogService.dialogState$.subscribe((state) => {
      this.dialogState = state;
    })
  }

  onKeydown() {
    this.sumbitNote();
  }

  sumbitNote() {
    this.notesService.add({ noteName: this.noteName, complite: false })
    this.noteName = '';
    this.closeDialog();
    this.filterService.updateState();
  }

  closeDialog() {
    this.dialogService.close()
  }
}
