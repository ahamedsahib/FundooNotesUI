import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
 hide=true;
 NoteForm !:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.NoteForm = new FormGroup({
      title: new FormControl(),
      description:new FormControl()
    });
  }

}
