import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:String=this.activatedRoute.snapshot.params['id_client'];

  formClient:FormGroup

  client:any

  hidden:boolean=false
  
  constructor(private formBuilder:FormBuilder ,private activatedRoute:ActivatedRoute, private clientService:ClientService,private router:Router) { }


  ngOnInit(): void {
    this.formClient = this.formBuilder.group({
      firstname:'',
      lastname:'',
      email:'',
      password:'',
      mobile:'',
      
    })
    console.log("id is : ",this.id)
    this.getClientById(this.id);
  }
  getClientById(id:any){
    this.clientService.getClientById(id).subscribe(
      (res:any) =>{this.client=res
        console.log("resultat",this.client)
      }
    )
  }

updateClient(client:any,id:any){
  this.clientService.updateClient(this.formClient.value,this.id).subscribe(
    (res:any) => {
      console.log("result: ",res)
      this.router.navigateByUrl("/home/listclient")
    }
  )
}
patchValue(){
  this.formClient.patchValue({
  firstname:this.client.firstname,
  lastname:this.client.lastname,
  email:this.client.email,
  password:this.client.password,
  mobile:this.client.mobile,
 
  })
  this.hidden=true
}

}
