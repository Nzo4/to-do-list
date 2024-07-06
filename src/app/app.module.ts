import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { NoteComponent } from './components/note/note.component';
import { NotesComponent } from './components/notes/notes.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionDirective } from './components/accordion/accordion.directive';
import { AccordionItemsDirective } from './components/accordion/accordion-items.directive';
import { FooterComponent } from './components/footer/footer.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    NoteComponent,
    NotesComponent,
    AccordionComponent,
    AccordionDirective,
    AccordionItemsDirective,
    FooterComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
