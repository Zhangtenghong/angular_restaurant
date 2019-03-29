import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {
  params: any;
  restaurant: any;
  newReview: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.restaurant = {}
    this.newReview = {name:"", stars:"", review:""}
    this._route.params.subscribe((params: Params) =>{
      this.params= params;
      this.getOneRestaurant(this.params.id);
    } );
    
  }

  getOneRestaurant(id) {
    console.log('in getOneREstaurant')
    let observable = this._httpService.getOneRestaurant(id);
    observable.subscribe(data => {
      console.log("Got our data!", data);
      this.restaurant = data;
      console.log("this restaurant: ", this.restaurant);
    }, err =>{
      console.log("something went wrong")
      console.log(err)
    }); 
  }

  addReview(id, newReview){
    console.log("this new review", this.newReview);
    let observable = this._httpService.addReview(id, this.newReview); 
    observable.subscribe(review => {
      console.log("adding a review", review);
      this._router.navigate(['/restaurants/', id]);
    })
  }
}
