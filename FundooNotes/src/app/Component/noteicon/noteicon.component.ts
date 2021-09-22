import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Service/NoteService/note-service.service';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { GetNotesComponent } from '../get-notes/get-notes.component';

@Component({
  selector: 'app-noteicon',
  templateUrl: './noteicon.component.html',
  styleUrls: ['./noteicon.component.scss']
})
export class NoteiconComponent implements OnInit {
  
  archive=false;
  hide=true;
  constructor(private getnote:GetNotesComponent,private noteService:NoteServiceService,private snackBar:MatSnackBar,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  colors: any[] = [
    {
      "color": "#fff",
      "toolTip":"default",
      "icon":true
    },
    {
      "color": "#F28B82",
      "toolTip":"Red",
      "icon":false
    },
    {
      "color": "#FBBC04",
      "toolTip":"Orange",
      "icon":false
    },
    {
      "color": "#FFF475",
      "toolTip":"Yellow",
      "icon":false
    },
    {
      "color": "#CCFF90",
      "toolTip":"Green",
      "icon":false
    },
    {
      "color": "#A7FFEB",
      "toolTip":"Teal",
      "icon":false
    },
    {
      "color": "#CBF0F8",
      "toolTip":"Blue",
      "icon":false
    }
,
    {
      "color": "#AECBFA",
      "toolTip":"Dark Blue",
      "icon":false
    },
    {
      "color": "#D7AEFB",
      "toolTip":"Purple",
      "icon":false
    },
    {
      "color": "#FDCFE8",
      "toolTip":"Pink",
      "icon":false
    },
    {
      "color": "#E6C9A8",
      "toolTip":"Brown",
      "icon":false
    },
    {
      "color": "#E8EAED",
      "toolTip":"Gray"
    }
  ];

  reminders: any[] = [
    {
      "Text": "Later Today",
      "Time":"8:00 PM"
    },
    {
      "Text": "Tommorow",
      "Time":"8:00 AM"
    },
    {
      "Text": "Next Week",
      "Time":"8:00 AM"
    }
  ];
// saveNote(){
//   this.getnote.hide=true;
//   let noteColor = this.getnote.noteColor ;
//   let reminder= this.getnote.isReminder==true?this.getnote.Reminder:"null";
//     const data = {
//       Title:this.getnote.NoteForm.value.Title,
//       Description:this.getnote.NoteForm.value.Description,
//       Colour:noteColor,
//       Reminder:reminder,
//       Pin:this.getnote.pinned,
//       Archive:this.archive
//     }
//   this.noteService.CreateNote(data)
//     .subscribe((result:any)=>{
//       this.snackBar.open(`${result.message}`, '', {
//         duration: 3000,
//         verticalPosition: 'bottom',
//         horizontalPosition: 'left'
//       });
//         this.getnote.noteColor="#fff";
//         this.archive=false;
//         this.getnote.Reminder="";
//         this.getnote.pinned = false;
//     },
//     error => {  
//       this.snackBar.open(`${error.error.message}`, '', {
//         duration: 3000,
//         verticalPosition: 'bottom',
//         horizontalPosition: 'left'
//       });
//   });
// }
archiveNote()
  {
    this.snackBar.open(`${this.archive?'Note Unarchived':'Note Archived'}`, '', {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      });
    this.archive=!this.archive;
  }

  addReminder(rem:any)
  {
    this.getnote.isReminder=true;
    this.getnote.Reminder=`${rem.Text} ${rem.Time}`
  }

  ChangeColor(color:any)
  {
      this.getnote.noteColor = color;
      for (var colour of this.colors)
      colour.icon = colour.color==color?true:false;
  }
  
  openDialog() 
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(CollaboratorComponent, dialogConfig);
  }
}
