import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-detail-sign',
  templateUrl: './detail-sign.page.html',
  styleUrls: ['./detail-sign.page.scss'],
})
export class DetailSignPage implements OnInit {

  public email:any;
  public password:any;
  public name:any;
  public surname:any;
  

  constructor() { }

  ngOnInit() {
  }


}
