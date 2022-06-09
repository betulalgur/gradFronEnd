import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})
export class LoginPage implements OnInit {

  public students:any;
  public url:string= 'https://covid-emu.herokuapp.com/users'
  public datas:any;
  public passed:any;
  public mydate:any;
  public status:any;
  public date:any;
  

  constructor(private http: HttpClient,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.passed = this.activatedRoute.snapshot.paramMap.get('id');

    this.status = this.passed.split('&')[0];
    this.date = this.passed.split('&')[1];

    

    console.log(this.status);
    console.log(typeof(this.status));
    console.log(this.date);

    //this.mydate = this.dateFormat;

  }

  /*tetikle(){
    this.status = this.passed.split('&')[0];
    this.date = this.passed.split('&')[1];
    this.hours = this.passed.split('&')[2];
  }*/

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

  mycourses(){
    
    console.log("buton çalışıyor");

  }*/

}
