import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-listeagent',
  templateUrl: './listeagent.component.html',
  styleUrls: ['./listeagent.component.css']
})
export class ListeagentComponent implements OnInit {
  fromAgent:FormGroup

  agents:any

  p:number=1;

  term:String="";

  constructor(private formBuiler:FormBuilder,private agentService:AgentService) { }

  ngOnInit(): void {
    this.getAgent();
  }
  
  getAgent() {
    this.agentService.getAgent().subscribe(
      (res: any) => {this.agents=res
        console.log("resultat : ", res)
      })
  }

  saveAgent() {
    console.log("agent is : ", this.fromAgent.value)
    this.agentService.saveAgent(this.fromAgent.value).subscribe(
      (res: any) => {
        console.log("resultat :", res)
      })
  }

  getFromAgentById(id:any) {
    console.log("id is :",id);

    this.agentService.getFromAgentById(id).subscribe(
      (res: any) => {
        console.log("resultat", res)
      }
    )
  }

  deleteFromAgentById(id:any) {
    console.log("id is :",id);

    this.agentService.deleteFromAgentById(id).subscribe(
      (res: any) => {
        console.log("resultat", res);
        this.getAgent()
      }
    )
  }
}
