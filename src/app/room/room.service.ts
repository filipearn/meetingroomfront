import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = "http://localhost:8080/api/v1/rooms/";

  constructor(private http: HttpClient) { }

  getRoom(id: number | undefined) : Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  updateRoom(id: number, value: any) : Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }
  createRoom(room: Room) : Observable<Object>{
    return this.http.post(`${this.baseUrl}`,room);
  }
  getRoomList() : Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  deleteRoom(id: number) : Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType: 'text'});
  }

  
}
