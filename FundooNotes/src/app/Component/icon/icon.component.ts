import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Service/NoteService/note-service.service';
import { AddNoteComponent } from '../add-note/add-note.component';
import { CollaboratorComponent } from '../collaborator/collaborator.component';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

hide=true;
  constructor(private addNote:AddNoteComponent,private noteService:NoteServiceService,private snackBar:MatSnackBar,public dialog: MatDialog) { }

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

addReminder(rem:any)
  {
    this.addNote.isReminder=true;
    this.addNote.Reminder=`${rem.Text} ${rem.Time}`
  }

  ChangeColor(color:any)
  {
      this.addNote.noteColor = color;
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
