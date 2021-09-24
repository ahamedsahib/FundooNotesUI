import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataserviceService } from 'src/app/Service/Datasharing/dataservice.service';
import { NoteServiceService } from 'src/app/Service/NoteService/note-service.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';
@Injectable({ 
  providedIn: 'root' 
})
@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.scss']
})
export class GetNotesComponent implements OnInit {
  notes: any 
  constructor(private snackBar:MatSnackBar,private noteService:NoteServiceService,public dialog: MatDialog,private datasharing:DataserviceService
    ) { }
  showpinnedNotes:any
  hovered=false;
  noteColor= "#fff";
  pinned = false;
  isReminder=false;
  Reminder="";
  ngOnInit(): void {
    this.getAllNote();
    this.datasharing.currentMessage.subscribe((change)=>{
      if(change == true){
        this.getAllNote();
        this.datasharing.changeMessage(false);
      }
    });
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
    
  pinNote(note:any)
  {
    this.noteService.Pin(note.noteId).subscribe(
      (result: any) => {
        console.log(result);
    });
  }
  RemoveReminder(note:any)
  {
    this.noteService.UnsetReminder(note.noteId).subscribe(
      (result: any) => {
        console.log(result);
    });
  }

  openDialog(note:any)
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(UpdateNoteComponent, {data: note});
  }
}

