import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http:HttpClient) { }
  getHotel(){
    return this.http.get(`http://localhost:8081/hotel`);
  }
  getHotelById(id:any){
    return this.http.get(`http://localhost:8081/hotel/id/${id}`);
  }
  saveHotel(hotels:any){
    return this.http.post(`http://localhost:8081/hotel/save`,hotels);
  }
  deleteHotelById(id:any){
    return this.http.delete(`http://localhost:8081/hoteldelete/${id}`);
  }
  updateHotel(id:any,hotel:any){
    return this.http.put(`http://localhost:8081/hotel/${id}`,hotel);
  }


}
