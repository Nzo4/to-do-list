import { Component, OnInit } from '@angular/core';
import { FilterService, State } from 'src/app/services/filter.service';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  constructor(public filterService: FilterService) { }
  currentFilterName: string = ''
  openOptionToggle: boolean = false;
  states!: State[];

  ngOnInit(): void {
    this.states = this.filterService.states;
    this.filterService.state$.subscribe((state) => {
      this.currentFilterName = state.name;
    })
  }

  getOptionName(name: string) {
    this.filterService.applyFilter(name);
  }

  changeStateAccordion(event: boolean) {
    this.openOptionToggle = event;
  }
}
