import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  headers={
    headers:{Authorization: "Bearer "+localStorage.getItem("token")}
  };
  constructor(private httpService:HttpServiceService) { }

  createNote(data:any){
   
    return this.httpService.post(`${environment.baseUrl}/api/login`,data,true,this.headers);
  }
}
