import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BilletService {

  constructor(private http:HttpClient) { }
  getBillet(){
    return this.http.get(`http://localhost:8081/billet`);
  }
  getBilletById(id:any){
    return this.http.get(`http://localhost:8081/billet/id/${id}`);
  }
  
  saveBillet(billet:any){
    return this.http.post(`http://localhost:8081/billet/save`,billet);
  }
  deleteFromBilletById(id:any){
    return this.http.delete(`http://localhost:8081/billet/${id}`)
  }
updateBillet(billet:any,id:any){
  return this.http.put(`http://localhost:8081/billet/${id}`,billet)
}

}
