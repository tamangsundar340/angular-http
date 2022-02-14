import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users : any;
  url = 'https://api.github.com/users';
  isLoading = false;

  constructor(private http:HttpClient) { }
  
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.isLoading =true;
    this.http.get(this.url).subscribe(res =>{
      console.log("success")
      console.log(res);
      setTimeout(() =>{
        this.users = res;
        this.isLoading =false;
      },2000)
    }, error =>{
      console.log("error")
      console.log(error)
    }, () =>{
      console.log("Completed")
    })
  }

  goToGithub(link){
    window.open(link, '__blank')
  }

}
