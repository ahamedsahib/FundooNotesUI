import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteServiceService } from 'src/app/Service/NoteService/note-service.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  params:any
  CollaboratorForm!: FormGroup;
  Userdetails:any
  collaborators:any=[];
  
  constructor(private dialogRef: MatDialogRef<CollaboratorComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private noteService: NoteServiceService) { }

  ngOnInit(): void {
    this.CollaboratorForm = new FormGroup({
      email: new FormControl('',[Validators.required,])
    });
    this.getCollaborators();
  }
  close() {
    this.dialogRef.close();
}
addCollaborator()
{
  this.Userdetails= JSON.parse(localStorage.getItem('userDetails')!);
  this.params = {
    NoteId:this.data.noteId,
    SenderEmailId:this.Userdetails.email,
    CollaboratorEmailId:this.CollaboratorForm.value.email
  }
  this.noteService.AddCollaborator(this.params).subscribe();
}
RemoveCollaborator(id:any)
  {
    this.noteService.RemoveCollaborator(id,this.data.noteId).subscribe();
  }
getCollaborators()
  {
    this.noteService.GetCollaborators(this.data.noteId).subscribe((result:any)=>
    {
      this.collaborators = result.data;
      console.log(result);
      console.log(result.data,"data");
    });
    console.log(this.collaborators,"collabs"); 
  }

}
