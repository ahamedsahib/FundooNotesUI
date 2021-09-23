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
  getnotes='Notes';
  toggleView()
  {
    this.list = !this.list;
  }
  opened: boolean=true;
  constructor(private snackBar:MatSnackBar,private noteService:NoteServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getAllLabels();
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
    localStorage.removeItem("token");
    localStorage.removeItem("userDetails");
    this.router.navigate(['/login']);
  }
}
