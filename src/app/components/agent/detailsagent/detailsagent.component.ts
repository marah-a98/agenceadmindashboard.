import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-detailsagent',
  templateUrl: './detailsagent.component.html',
  styleUrls: ['./detailsagent.component.css']
})
export class DetailsagentComponent implements OnInit {

  id:String=this.activatedRoute.snapshot.params['id_agent'];
  
  formAgent:FormGroup
  
  agent:any

  hidden:boolean=false

  constructor(private activatedRoute:ActivatedRoute, private agentService:AgentService ,private router:Router ,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formAgent = this.formBuilder.group({
      firstname:'',
      lastname:'',
      email:'',
      password:'',
      mobile:''
    })
    
    this.getAgentById(this.id);
  }

  patchValue(){
    this.formAgent.patchValue({
      firstname:this.agent.firstname,
      lastname:this.agent.lastname,
      email:this.agent.email,
      password:this.agent.password,
      mobile:this.agent.mobile
    })
    this.hidden=true
  }

getAgentById(id:any){
  this.agentService.getFromAgentById(id).subscribe(
    (res:any) =>{this.agent=res
      console.log("resultat",this.agent)
    })
}

updateAgent(agent:any,id:any){
  
  this.agentService.updateAgent(this.formAgent.value,this.id).subscribe(
    (res:any) => {
      console.log("resultat :",res)
      this.router.navigateByUrl('/home/listagent')
    }
  )
}


}
