import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  addRestaurant(newRestaurant){
  return this._http.post('/api/restaurants', newRestaurant);
  }
  
  getRestaurants(){
    return this._http.get('/api/restaurants');
  }

  deleteRestaurant(id){
    return this._http.delete('/api/restaurants/'+id);
  }

  getOneRestaurant(id) {
    return this._http.get('/api/restaurants/' + id);
  }

  getReviews(id) {
    return this._http.get('/api/reviews/' + id)
  }

  addReview(id, newReview) {
    return this._http.post(`/api/restaurant/${id}`, newReview);
  }

  editRestaurant(editOne) {
    return this._http.put(`/api/restaurants/${editOne._id}`, editOne)
  }
}
