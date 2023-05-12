import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http:HttpClient) { }

  saveClient(client:any){
    return this.http.post(`http://localhost:8081/client/save`,client);
  }

  getClient(){
    return this.http.get(`http://localhost:8081/client`);
  }
  getClientById(id:any){
    return this.http.get(`http://localhost:8081/client/${id}`);
  }

  deleteFromClientById(id:any){
    return this.http.delete(`http://localhost:8081/clientdelet/${id}`)
  }

  updateClient(client:any,id:any){
    return this.http.put(`http://localhost:8081/client/${id}`,client)
  }

  
  }





