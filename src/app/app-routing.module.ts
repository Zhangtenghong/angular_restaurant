import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CreateReviewComponent } from './create-review/create-review.component';

const routes: Routes = [
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'restaurants/new', component: TestComponent },
  { path: 'restaurants/:id/review', component: CreateReviewComponent },
  { path: 'restaurants/:id', component: ReviewsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/restaurants' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
