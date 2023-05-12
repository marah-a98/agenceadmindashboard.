import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BilletService } from 'src/app/services/billet.service';

@Component({
  selector: 'app-detailbillet',
  templateUrl: './detailbillet.component.html',
  styleUrls: ['./detailbillet.component.css']
})
export class DetailbilletComponent implements OnInit {

  id:String=this.activatedRoute.snapshot.params['id_billet'];

  formBillet:FormGroup

  billet:any 

  hidden:boolean=false

  constructor(private activatedRoute:ActivatedRoute,private formBuilder:FormBuilder,private billetService:BilletService, private router:Router) { }

  ngOnInit(): void {
    this.formBillet = this.formBuilder.group({
      
      checkin:'',
      checkout:'',
      destination:'',
      adult:'',
      children:'',
      room:'',

    })
    this.getBilletById(this.id);
  }
  patchValue(){
    this.formBillet.patchValue({
      checkin:this.billet.checkin,
      checkout:this.billet.checkout,
      destination:this.billet.destination,
      adult:this.billet.adult,
      children:this.billet.children,
      room:this.billet.room,
     
    })

    this.hidden=true
  }
  getBilletById(id:any){
    this.billetService.getBilletById(id).subscribe(
      (res:any) => {this.billet=res
        console.log("resultat: ",this.billet)
       
      }   
    )
  }

updateBillet(billet:any,id:any){
this.billetService.updateBillet(this.formBillet.value,this.id).subscribe(
  (res:any) =>{
    console.log("resultat: ",res)
    this.router.navigateByUrl('/home/listbillet')
  }
)
}

}
