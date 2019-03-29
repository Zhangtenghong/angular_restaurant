import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  singleRestaurant:any;
  allRestaurants: any;
  constructor(
    private _httpService : HttpService,
    private _router:Router,
    private _route: ActivatedRoute,
    ) {
    this.allRestaurants = []
   
  }

  ngOnInit() {
    this.getRestaurantsFromService();
  }

  getRestaurant(id){
    let observable=this._httpService.getOneRestaurant(id);
    console.log("Get the data");
    observable.subscribe((data)=>{
      this.singleRestaurant=data;
      console.log(this.singleRestaurant)
    })
  }

  getRestaurantsFromService(){
    let dataFromService_1=this._httpService.getRestaurants();
    console.log("Get the data");
    dataFromService_1.subscribe((data) =>{
      this.allRestaurants=data;
      console.log(this.allRestaurants)
    })
  }
  
  deleteRestaurantFromService(id){
    let dataFromService_3=this._httpService.deleteRestaurant(id);
    console.log("Delete the data",id);
    dataFromService_3.subscribe();
    this.getRestaurantsFromService();
  }
}

