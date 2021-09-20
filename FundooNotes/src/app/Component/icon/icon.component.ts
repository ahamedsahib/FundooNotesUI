import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Service/NoteService/note-service.service';
import { AddNoteComponent } from '../add-note/add-note.component';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  
hide=true;
  constructor(private addNote:AddNoteComponent,private noteService:NoteServiceService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
saveNote(){
  this.addNote.hide=true;
  this.noteService.CreateNote(this.addNote.NoteForm.value)
    .subscribe((result:any)=>{
      this.snackBar.open(`${result.message}`, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
    },
    error => {  
      this.snackBar.open(`${error.error.message}`, '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
  });
}
}
