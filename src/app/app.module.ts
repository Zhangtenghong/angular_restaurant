import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { CreateReviewComponent } from './create-review/create-review.component';
import { EditComponent } from './edit/edit.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    EditComponent,
    ReviewsComponent,
    CreateReviewComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
