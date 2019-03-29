import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  newRestaurant: any;
  errorMessages: any;

  constructor(
    private _httpService: HttpService,
    private _router: Router){
    this.newRestaurant={name:"", cuisine:""}
    this.errorMessages=[]
  }

 ngOnInit() {
 }

 createRestaurant(){
    let observable_1=this._httpService.addRestaurant(this.newRestaurant);
    observable_1.subscribe(data =>{
      console.log("Got data from post back", data);
      this._router.navigate(['/restaurants']);
    }, (err)=>{
      this.errorMessages = err.error;
  })
 }
}
