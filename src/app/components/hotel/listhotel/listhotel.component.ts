import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-listhotel',
  templateUrl: './listhotel.component.html',
  styleUrls: ['./listhotel.component.css']
})
export class ListhotelComponent implements OnInit {
  
  fromhotel:FormGroup
  
  hotels:any
  p:number=1;
  term:String="";

  constructor(private formBuilder:FormBuilder , private hotelService:HotelService) {}

  ngOnInit(): void {
this.getHotel();
  }
  getHotel(){
    console.log("here get hotel")
    this.hotelService.getHotel().subscribe(
      (res:any) => { this.hotels = res
        console.log("resultat : ",res)
      }
    )
  }
  getHotelById(id:any){
    this.hotelService.getHotelById(id).subscribe(
      (res:any) => {
        console.log("resultat : ", res)
      }
    )
  }
  deleteHotelById(id:any){
    this.hotelService.deleteHotelById(id).subscribe(
      (res:any) =>{
        console.log("resultat : ",res)
        this.getHotel();
      } 
    )
  }
 

}
