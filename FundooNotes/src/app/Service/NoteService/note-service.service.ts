import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  userDetails= JSON.parse(localStorage.getItem('userDetails')!);


  headers={
    headers:{Authorization: "Bearer "+localStorage.getItem("token")}
  };
  constructor(private httpService:HttpServiceService) { }

  CreateNote(data:any){
    data.UserId= this.userDetails.userId;
    return this.httpService.post(`${environment.baseUrl}/api/notes`,data,true,this.headers);
  }
  getNote(){
    var userid = this.userDetails.userId;
    return this.httpService.get(`${environment.baseUrl}/api/Note?userId=${userid}`,true,this.headers);
  }
  getLabel(){
    var userid = this.userDetails.userId;
    return this.httpService.get(`${environment.baseUrl}/api/Label?userId=${userid}`,true,this.headers);
  }
}
