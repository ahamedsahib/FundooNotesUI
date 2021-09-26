import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataserviceService } from 'src/app/Service/Datasharing/dataservice.service';
import { NoteServiceService } from 'src/app/Service/NoteService/note-service.service';

@Component({
  selector: 'app-get-label-notes',
  templateUrl: './get-label-notes.component.html',
  styleUrls: ['./get-label-notes.component.scss']
})
export class GetLabelNotesComponent implements OnInit {
  
  @Input() labels:any

  showpinnedNotes:any
  hovered=false;
  notes: any 
  noteColor= "#fff";
  pinned = false;
  isReminder=false;
  Reminder="";

  constructor(private snackBar:MatSnackBar,private noteService:NoteServiceService,private datasharing:DataserviceService) { }
  
  ngOnInit(): void {
    this.getAllNote();
  }
  
   getAllNote(){
      this.noteService.getLabelNote(this.labels)
        .subscribe((result:any)=>{
          this.notes=result.data;
          console.log(this.notes);
          this.datasharing.changeMessage(true);
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

