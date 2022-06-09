import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { ROUTES } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-test-upload',
  templateUrl: './test-upload.page.html',
  styleUrls: ['./test-upload.page.scss'],
})
export class TestUploadPage implements OnInit {

  public status:any;
  public mydate:any;
  public dateFormat:any;
  //public arrays:Array<string> = [];

  constructor() { }

  ngOnInit() {
    
    
  }

   getDate(mydate){
    this.dateFormat = this.mydate.split('T')[0]; 

    console.log(this.dateFormat);
    this.mydate = this.dateFormat;
   // this.arrays.push(this.mydate);
    //this.arrays.push(this.mydate);
    return this.mydate;
   }
  
  


}
