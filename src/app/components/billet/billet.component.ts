import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BilletService } from 'src/app/services/billet.service';

@Component({
  selector: 'app-billet',
  templateUrl: './billet.component.html',
  styleUrls: ['./billet.component.css']
})
export class BilletComponent implements OnInit {

  formBillet:FormGroup

  constructor(private formBuilder:FormBuilder , private billetService:BilletService , private router:Router) { }

  ngOnInit(): void {
    this.formBillet = this.formBuilder.group({
      checkin:'',
      checkout:'',
      destination:'',
      adult:'',
      children:'',
      room:'',     
     
    })
  }
  saveBillet(){
    this.billetService.saveBillet(this.formBillet.value).subscribe(
      (res:any) => {
        console.log("resultat: ",res)
        this.router.navigateByUrl("/home/listbillet");
      }
    )
  }


}
