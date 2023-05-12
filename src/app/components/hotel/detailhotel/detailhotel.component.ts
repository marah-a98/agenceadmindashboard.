import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-detailhotel',
  templateUrl: './detailhotel.component.html',
  styleUrls: ['./detailhotel.component.css']
})
export class DetailhotelComponent implements OnInit {
id:String=this.activatedRouter.snapshot.params["id_hotel"];
hotel:any
formHotel:FormGroup
hidden:boolean=false
  constructor(private formBuilder:FormBuilder,private activatedRouter:ActivatedRoute, private hotelService:HotelService,private router:Router) { }

  ngOnInit(): void {
    this.formHotel = this.formBuilder.group({
      nom:'',
      contry:'',
      city:'',
      nombretoile:'',

    })
    console.log("this hotel id :",this.id);
    this.getHotelById(this.id);
  }
  getHotelById(id:any){
    this.hotelService.getHotelById(id).subscribe(
      (res:any) => {this.hotel=res
        console.log("resultat : ", this.hotel)
      }
    )
  }
  patchValue(){
    this.formHotel.patchValue({
      nom:this.hotel.nom,
      contry:this.hotel.contry,
      city:this.hotel.city,
      nombretoile:this.hotel.nombretoile
    })
    this.hidden=true
  }

  updateHotel(id:any,hotel:any){
    this.hotelService.updateHotel(this.id,this.formHotel.value).subscribe(
      (res:any) => {
        console.log("result: ",res)
        this.router.navigateByUrl('/home/listhotel')
      }
    )
  }

}
