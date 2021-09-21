import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  AddCollaboratorForm!: FormGroup;
  
  constructor() { }
  
  ngOnInit(): void {
    this.AddCollaboratorForm = new FormGroup({
      email: new FormControl()
    });
  }


}
