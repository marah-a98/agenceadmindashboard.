import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  role:any=localStorage.getItem('role');

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  logout(){
    localStorage.setItem("state","0");
    localStorage.removeItem("role");
    console.log("here logout");
    
    this.router.navigateByUrl("login");
  }
  

}
