import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
params: any;
restaurant: any;
reviews: any;
  constructor(
  private _httpService: HttpService,
  private _route: ActivatedRoute,
  private _router: Router
  ) { }

  ngOnInit() {
    this.restaurant = {} 
    this.reviews = []
    this._route.params.subscribe((params: Params) => this.params= params); 
    this.getOneRestaurant(this.params.id); 
    this.getDishes(this.params.id);
  }

  getOneRestaurant(id) {
    console.log("in getOneREstaurant");
    console.log(id);
    let observable = this._httpService.getOneRestaurant(id); 
    observable.subscribe(data => {
        console.log("Got our data!", data);
        this.restaurant = data;
        console.log("this country: ", this.restaurant);
      },
      err=>{
        console.log("Something went wrong");
        console.log(err)
      }); 
    }

  getDishes(id) {
    let observable = this._httpService.getReviews(id);
    observable.subscribe(response => {
      let data = response as any; 
      console.log("got the dishes", data);
      this.reviews = data['success'];
      console.log("THIS.DISHES:", this.reviews)
    })
  }
}
