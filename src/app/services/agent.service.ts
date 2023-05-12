
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http:HttpClient) { }
  saveAgent(agent:any){
    return this.http.post(`http://localhost:8081/agent/save`,agent);
  }

  getAgent(){
    return this.http.get(`http://localhost:8081/agent`);
  }
  deleteFromAgentById(id:any){
    return this.http.delete(`http://localhost:8081/agent/${id}`);
  }
  getFromAgentById(id:any){
    return this.http.get(`http://localhost:8081/agent/${id}`);
  }

  updateAgent(agent:any,id:any){
    return this.http.put(`http://localhost:8081/agent/${id}`,agent)
  }
 
}

