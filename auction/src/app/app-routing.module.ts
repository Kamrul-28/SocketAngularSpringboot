import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenderComponent } from './tender/tender.component';
import { BidComponent } from './bid/bid.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { TenderWiseBidComponent } from './tender-wise-bid/tender-wise-bid.component';
import { CreateTenderComponent } from './create-tender/create-tender.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'tender', component: TenderComponent},
  {path: 'createNewTender', component: CreateTenderComponent},
  {path: 'tender-wise-bid/:id', component: TenderWiseBidComponent},
  {path: 'bid/:id', component: BidComponent},
  {path: 'login', component: AuthComponent},
  {path: 'logout', component: AuthComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
