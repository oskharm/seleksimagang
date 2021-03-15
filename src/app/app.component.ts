import { Component } from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public api:ApiService,)
  {
    this.getData(); //kode tambahan
  }
dataUsers:any = [];
getData()
{ 
  this.api.baca().subscribe(res=>{
    console.log(res);
    this.dataUsers = res;
  })
}
 
hapus(n:any){
  let id = this.dataUsers.indexOf(n);
  console.log(id)
  if (id !== null) {
    this.dataUsers.splice(n,1)
  }
}

}