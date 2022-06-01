import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import{ ReactiveFormsModule} from '@angular/forms';
import { PostComponent } from './post/post.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { VideosComponent } from './videos/videos.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {HttpClientModule} from '@angular/common/http';
import { PlugnGoComponent } from './plugn-go/plugn-go.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import { ProductListComponent } from './shopping-cart/product-list/product-list.component';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { ProductItemComponent } from './shopping-cart/product-list/product-item/product-item.component';
import { CartItemComponent } from './shopping-cart/cart/cart-item/cart-item.component';
import { CarComponent } from './car/car.component';
import { BikeComponent } from './bike/bike.component';
import { ScootyComponent } from './scooty/scooty.component';
import { CargoComponent } from './cargo/cargo.component';
import { CycleComponent } from './cycle/cycle.component';







  @NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PostComponent,
    FooterComponent,
    VideosComponent,
    FeedbackComponent,
    PlugnGoComponent,
    HeaderComponent,
    ProductListComponent,
    CartComponent,
    ProductItemComponent,
    CartItemComponent,
    ShoppingCartComponent,
    CarComponent,
    BikeComponent,
    ScootyComponent,
    CargoComponent,
    CycleComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
   

   ],
  exports:[
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}

