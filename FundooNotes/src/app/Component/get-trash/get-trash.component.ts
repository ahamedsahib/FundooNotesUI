import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Service/NoteService/note-service.service';

@Component({
  selector: 'app-get-trash',
  templateUrl: './get-trash.component.html',
  styleUrls: ['./get-trash.component.scss']
})
export class GetTrashComponent implements OnInit {

  showpinnedNotes:any
  hovered=false;
  notes: any 
  noteColor= "#fff";
  pinned = false;
  isReminder=false;
  Reminder="";
  constructor(private snackBar:MatSnackBar,private noteService:NoteServiceService) { }
  
  ngOnInit(): void {
    this.getAllNote();
  }

   getAllNote()
   {
      this.noteService.getTrashNote()
        .subscribe((result:any)=>{
          this.notes=result.data;
          console.log(this.notes);
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
    Restore(note:any){
      this.noteService.RestoreNote(note.noteId).subscribe(
        (result: any) => {
          console.log(result);
      });
    }
    Delete(note:any){
      this.noteService.DeleteForever(note.noteId).subscribe(
        (result: any) => {
          console.log(result);
      });
    }
    emptyTrash()
   {
     this.noteService.EmptyTrash().subscribe();
   }
}

