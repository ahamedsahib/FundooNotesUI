import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Service/NoteService/note-service.service';

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.scss']
})
export class GetNotesComponent implements OnInit {
  notes: any 
  constructor(private snackBar:MatSnackBar,private noteService:NoteServiceService) { }
  showpinnedNotes:any
  hovered=false;
  noteColor= "#fff";
  pinned = false;
  isReminder=false;
  Reminder="";
  ngOnInit(): void {
    this.getAllNote();
  }
  
   getAllNote(){
      this.noteService.getNote()
        .subscribe((result:any)=>{
          this.notes=result.data;
          console.log(this.notes);
          
          this.snackBar.open(`${result.message}`, '', {
            duration: 3000,
            verticalPosition: 'bottom',
            horizontalPosition: 'left'
          });
          for (let note of this.notes) {
            if(note.pin==true)
            {
              this.showpinnedNotes=true;
              break;
            }
          }
        },
        error => {  
          this.snackBar.open(`${error.error.message}`, '', {
            duration: 3000,
            verticalPosition: 'bottom',
            horizontalPosition: 'left'
          });
      });
    }
    
  pinNote()
  {
    this.snackBar.open(`${this.pinned?'Note unpinned':'Note Pinned'}`, '', {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
      this.pinned=!this.pinned;
    
  }
  RemoveReminder()
  {
    this.isReminder = false;
    this.snackBar.open('Reminder Deleted', '', {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'left'
    });
  }
}
