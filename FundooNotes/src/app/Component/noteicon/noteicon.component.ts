import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataserviceService } from 'src/app/Service/Datasharing/dataservice.service';
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
  Reminder:any
  constructor(private getnote:GetNotesComponent,private noteService:NoteServiceService,private snackBar:MatSnackBar,public dialog: MatDialog,private datasharing:DataserviceService) { }
  
  @Input() note:any;

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
    },
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

  archiveNote()
  {
    this.noteService.Archive(this.note.noteId).subscribe(
        (result: any) => {
          this.snackBar.open(`${result.message}`, '', {duration: 3000 ,verticalPosition: 'bottom', horizontalPosition: 'left' })      
      });
    this.datasharing.changeMessage(true);
  }

  DeleteNote()
  {
  this.noteService.ToTrash(this.note.noteId).subscribe(
    (result: any) => 
    {
      console.log(result);
  });
  this.datasharing.changeMessage(true);
}
  addReminder(rem:any)
  {
    this.getnote.isReminder=true;
    this.Reminder=`${rem.Text} ${rem.Time}`
    this.noteService.AddReminder(this.note.noteId,this.Reminder).subscribe(
      (result: any) => {
        console.log(result);
    });
    this.datasharing.changeMessage(true);
  }

  ChangeColor(color:any)
  {
    this.noteService.ChangeNoteColor(this.note.noteId,color).subscribe(
      (result: any) => {
        console.log(result);
    });
    this.datasharing.changeMessage(true);
  }

  openDialog() 
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(CollaboratorComponent,{data: this.note} );
  }
}
