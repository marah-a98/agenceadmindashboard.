import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
formHotel:FormGroup
fileToUpload: Array<File> = [];

  constructor(private formBuilder:FormBuilder,private hotelService:HotelService , private router:Router) { }

  ngOnInit(): void {
    this.geneForm();
  }

  geneForm(){
    this.formHotel = this.formBuilder.group({
      nom:'',
      contry:'',
      city:'',
      nombretoile:''
    })
  }


  saveHotel(){

    let formData = new FormData();
    formData.append("nom", this.formHotel.value.nom);
    formData.append("contry", this.formHotel.value.contry);
    formData.append("city", this.formHotel.value.city);
    formData.append("nombretoile", this.formHotel.value.nombretoile);
    formData.append("file", this.fileToUpload[0]);


    console.log('hotel a ajoutr',this.formHotel.value)
    this.hotelService.saveHotel(formData).subscribe(
      (res:any) => {
        console.log("resultat : ",res)
        this.router.navigateByUrl("/home/listhotel");
      }
    )
  }
  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }
}

