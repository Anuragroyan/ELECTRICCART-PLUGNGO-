import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {PostComponent } from './post/post.component';
import {FooterComponent} from './footer/footer.component';
import {VideosComponent} from './videos/videos.component';
import {FeedbackComponent} from './feedback/feedback.component';
import { PlugnGoComponent } from './plugn-go/plugn-go.component';
import {ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CarComponent} from './car/car.component';
import { BikeComponent} from './bike/bike.component';
import { ScootyComponent} from './scooty/scooty.component';
import { CargoComponent} from './cargo/cargo.component';
import { CycleComponent} from './cycle/cycle.component';
const routes: Routes = [
  { path: '',redirectTo:'/',pathMatch:'full'},
  {component:RegisterComponent,path:'register'},
  {component:PostComponent, path:'post'},
  {component:FooterComponent,path:'footer'},
  {component:VideosComponent,path:'videos'},
  {component:FeedbackComponent,path:'feedback'},
  { component:PlugnGoComponent,path:'plugngo'},
 { component:ShoppingCartComponent,path:'shopping-cart'},
 { component:CarComponent,path:'car'},
 { component:ScootyComponent,path:'scooty'},
 { component:BikeComponent,path:'bike'},
 { component:CargoComponent,path:'cargo'},
 { component:CycleComponent,path:'cycle'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
