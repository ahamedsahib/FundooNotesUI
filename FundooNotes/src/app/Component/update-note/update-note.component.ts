import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Service/NoteService/note-service.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

 hide=true;
 noteColor = "#fff";
 pinned=false;
 isReminder=false;
 Reminder="";
 isClose=true;
 NoteForm !: FormGroup

 constructor(private snackBar:MatSnackBar,@Inject(MAT_DIALOG_DATA) public data:any,private noteService:NoteServiceService, public dialogRef: MatDialogRef<UpdateNoteComponent>) {
   this.isReminder=data.reminder!=null?true:false 
  }

  ngOnInit(): void {
    this.NoteForm = new FormGroup({
      Title: new FormControl(),
      Description:new FormControl()
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
    this.isReminder=false;
    this.snackBar.open('Reminder Deleted', '', {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'left'
    });  
  }
  Close(note:any) 
  {
    this.noteService.UpdateNote(note).subscribe();
    this.dialogRef.close();
  }
}

