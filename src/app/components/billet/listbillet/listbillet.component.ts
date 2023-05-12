import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BilletService } from 'src/app/services/billet.service';

@Component({
  selector: 'app-listebillet',
  templateUrl: './listbillet.component.html',
  styleUrls: ['./listbillet.component.css']
})
export class ListbilletComponent implements OnInit {

  formBillet:FormGroup

  billets:any
  p:number=1;
  term:String="";

  constructor(private formBuilder:FormBuilder , private billetService:BilletService) { }

  ngOnInit(): void {
    this.getBillet();
  }
  getBillet(){
    this.billetService.getBillet().subscribe(
      (res:any) => {this.billets = res;
        console.log("resultat :",res)
      }
    )
  }

  getBilletById(id:any){
    console.log("ths id is :",id);
    this.billetService.getBilletById(id).subscribe(
      (res:any) => {
        console.log("resultat: ",res);
      }   
    )
  }

  deleteFromBilletById(id:any){
    this.billetService.deleteFromBilletById(id).subscribe(
      (res:any) => {
        console.log("resultat: ",res)
        this.getBillet();
      }
    )
  }

}
