import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  formClient:FormGroup

  
  constructor(private formBuilder:FormBuilder,private clientService:ClientService , private router:Router) { }


  ngOnInit(): void {
    this.formClient = this.formBuilder.group({
      firstname:'',
      lastname:'',
      email:'',
      password:'',
      mobile:'',
      
    })
  }


  saveClient(){

    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log("client is : ",this.formClient.value)
        this.clientService.saveClient(this.formClient.value).subscribe(
          (res:any) => {
            console.log("resultat :",res)
            this.router.navigateByUrl("/home/listclient");
          }
        )



        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })


  }

}

