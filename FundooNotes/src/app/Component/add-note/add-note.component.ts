import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
 hide=true;
 pinned=false;
 NoteForm !:FormGroup
  constructor(private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.NoteForm = new FormGroup({
      title: new FormControl(),
      description:new FormControl()
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

}
