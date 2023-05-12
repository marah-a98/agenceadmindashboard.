import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-listclient',
  templateUrl: './listclient.component.html',
  styleUrls: ['./listclient.component.css']
})
export class ListclientComponent implements OnInit {

  formClient: FormGroup

  clients:any 
  p:number=1;
  term:String="";

  constructor(private formBuilder: FormBuilder, private clientService: ClientService) { }

  ngOnInit(): void {
    this.getListClient();
  }

  getListClient() {
    this.clientService.getClient().subscribe(
      (res: any) => {this.clients=res
        console.log("resultat : ", res)
      })
  }

  getListClientById(id:any) {
    this.clientService.getClientById(id).subscribe(
      (res: any) => {
        console.log("resultat", res)
      }
    )
  }

 
  deleteFromClientById(id:any) {
    this.clientService.deleteFromClientById(id).subscribe(
      (res: any) => {
        console.log("resultat", res);
        this.getListClient()
      }
    )
  }
}

