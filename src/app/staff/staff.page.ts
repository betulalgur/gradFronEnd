import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.page.html',
  styleUrls: ['./staff.page.scss'],
})
export class StaffPage implements OnInit {
  public status: any;
  public date:any;
  public passed: string;

  constructor(private activatedRoute: ActivatedRoute) { 
    
  }

  ngOnInit() {
    
    this.passed = this.activatedRoute.snapshot.paramMap.get('id');

    this.status = this.passed.split('&')[0];
    this.date = this.passed.split('&')[1];

    

    console.log(this.status);
    console.log(typeof(this.status));
    console.log(this.date);
  }

}
