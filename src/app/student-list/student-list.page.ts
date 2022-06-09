import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { enableProdMode } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.page.html',
  styleUrls: ['./student-list.page.scss'],
})
export class StudentListPage implements OnInit {
  
  public students:any;
  //public url:string= 'https://covid-emu.herokuapp.com/users'
  public datas:any;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.students = [
      {name: 'std 1',status: 'negative'},
      {name: 'std 2',status: 'negative'},
      {name: 'std 3',status: 'positive'},
      {name: 'std 4',status: 'negative'},
  ]
  }

  /*ionViewWillEnter(){
    this.getUsers();
  }

  getUsers(){
    console.log("calisti");
    this.http.get(this.url).subscribe(data=>{ 
      this.datas = data;
    })
  }*/
  

}
