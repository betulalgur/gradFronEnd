import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  public status:any;
  public dateFormat: any;
  public mydate: any;
  public passed:any;
  public date:any;
  
  

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
