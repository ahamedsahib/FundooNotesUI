import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  CollaboratorForm!: FormGroup;
  
  constructor(private dialogRef: MatDialogRef<CollaboratorComponent>) { }

  ngOnInit(): void {
    this.CollaboratorForm = new FormGroup({
      email: new FormControl()
    });
  }
  close() {
    this.dialogRef.close();
}
 

}
