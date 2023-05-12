import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  formAgent:FormGroup


  constructor(private formBuilder:FormBuilder,private agentService:AgentService,private router:Router) { }

  ngOnInit(): void {
    this.formAgent = this.formBuilder.group({
      firstname:'',
      lastname:'',
      email:'',
      password:'',
      mobile:''

    })
    
  }
  
  saveAgent(){
    console.log("just before save agent is : ",this.formAgent.value)
    this.agentService.saveAgent(this.formAgent.value).subscribe(
      (res:any) => {
        console.log("resultat :",res)
        this.router.navigateByUrl("/home/listagent");
      }
      
    )
  
  }
 
  


}
