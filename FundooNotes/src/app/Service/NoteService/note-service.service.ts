import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';
import { environment } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  userDetails= JSON.parse(localStorage.getItem('userDetails')!);


  headers={
    headers:{Authorization: "Bearer "+localStorage.getItem("token")}
  };
  constructor(private httpService:HttpServiceService) {}

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
  getArchiveNote(){
    var userid = this.userDetails.userId;
    return this.httpService.get(`${environment.baseUrl}/api/Archive?userId=${userid}`,true,this.headers);
  }
  getReminderNote(){
    var userid = this.userDetails.userId;
    return this.httpService.get(`${environment.baseUrl}/api/Reminder?userId=${userid}`,true,this.headers);
  }
  getTrashNote(){
    var userid = this.userDetails.userId;
    return this.httpService.get(`${environment.baseUrl}/api/Trash?userId=${userid}`,true,this.headers);
  }
  ChangeNoteColor(id:any,color:string){
    let params = new HttpParams().set('noteId',id).set('noteColor',color);
    return this.httpService.put(`${environment.baseUrl}/api/Colour`,params,true,this.headers);
  }
  UnsetReminder(id:any){
    let params = new HttpParams().set('noteId',id);
    return this.httpService.put(`${environment.baseUrl}/api/Reminder`,params,true,this.headers);
  }
  AddReminder(id:any,reminder:any){
    let params = new HttpParams().set('noteId',id).set('addReminder',reminder);
    return this.httpService.put(`${environment.baseUrl}/api/setReminder`,params,true,this.headers);
  }
  ToTrash(id:any){
    let params = new HttpParams().set('noteId',id);
    return this.httpService.put(`${environment.baseUrl}/api/Trash`,params,true,this.headers);
  }
  Archive(id:any){
    let params = new HttpParams().set('noteId',id);
    return this.httpService.put(`${environment.baseUrl}/api/Archive`,params,true,this.headers);
  }
  Pin(id:any){
    let params = new HttpParams().set('noteId',id);
    return this.httpService.put(`${environment.baseUrl}/api/Pin`,params,true,this.headers);
  }
  RestoreNote(id:any){
    let params = new HttpParams().set('noteId',id);
    return this.httpService.put(`${environment.baseUrl}/api/restoreNote`,params,true,this.headers);
  }
  DeleteForever(id:any)
  {
    return this.httpService.delete(`${environment.baseUrl}/api/note?noteId=${id}`,true,this.headers);
  }
  UpdateNote(data:any)
  {
    return this.httpService.put(`${environment.baseUrl}/api/Note`,data,true,this.headers);
  }
  EmptyTrash()
  {
    var userid = this.userDetails.userId;
    return this.httpService.delete(`${environment.baseUrl}/api/emptyTrash?userId=${userid}`,true,this.headers);
  }
  
}
