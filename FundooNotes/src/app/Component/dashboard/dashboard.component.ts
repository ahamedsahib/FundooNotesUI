import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NoteServiceService } from 'src/app/Service/NoteService/note-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  list: boolean = true;
  labels:any
  Userdetails:any
  getnotes='Notes';
  noteLabel:any
  toggleView()
  {
    this.list = !this.list;
  }
  opened: boolean=true;
  constructor(private snackBar:MatSnackBar,private noteService:NoteServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getAllLabels();
    this.Userdetails= JSON.parse(localStorage.getItem('userDetails')!);
  }
  getAllLabels(){
    this.noteService.getLabel()
      .subscribe((result:any)=>{
        this.labels=result.data;
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
  signout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
