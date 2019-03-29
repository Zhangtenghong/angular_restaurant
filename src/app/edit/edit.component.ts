import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() RestaurantToEdit:any
  constructor(
    private _httpService : HttpService,
    private _router:Router,
    private _route: ActivatedRoute,
  ) { 
    this.RestaurantToEdit={name:"",cuisine:"",star:""}
  }

  ngOnInit() {
  }

  updateRestaurant(){
    let observable_2=this._httpService.editRestaurant(this.RestaurantToEdit);
    observable_2.subscribe((data)=>{
      this.RestaurantToEdit={name:"",cuisine:"",star:""};
      location.reload();
    })
  }
}
