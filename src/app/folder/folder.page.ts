import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { IonText } from '@ionic/angular';
import { json, Router } from 'express';
import { DbServiceService } from '../db-service.service';
import { HttpClient } from '@angular/common/http';
import { AnyForUntypedForms, ControlContainer } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public entered_email:any;
  public entered_password:any;
  public students:any;
  public datas:any;
  public control:any;
  public myVal:any;
  public message:any;
  public realEmail:any;
  public temp:any;
 
 
  

  constructor(private activatedRoute: ActivatedRoute, private getstudent:DbServiceService , private http: HttpClient) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.message = this.activatedRoute.snapshot.paramMap.get('id');
   

    

  }


  
  /*ionViewWillEnter(){
    console.log("calisti");
    this.http.get(this.url).subscribe(data=>{
      this.datas = data;
    })
    
  }*/

  /*getUsers(){
    console.log("calisti");
    this.http.get(this.url).subscribe(data=>{ 
      this.datas = data;
    })
  }

  logincontrol(entered_email){ //buraya random geldi

    
    this.http.get<any>(this.url + entered_email).subscribe(res => {
      this.control = res;
    })


    
  
  }*/
  

  



/*StudentGet(){
  this.getstudent.getUser.subscribe(arg => this.property = arg);
   (data => {
    this.students = data;
    localStorage.setItem('json', JSON.stringify(this.students))
  });
}*/

}
