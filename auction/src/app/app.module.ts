import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TenderComponent } from './tender/tender.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from  '@angular/common/http';
import { BidComponent } from './bid/bid.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { TenderWiseBidComponent } from './tender-wise-bid/tender-wise-bid.component';
import { CreateTenderComponent } from './create-tender/create-tender.component';
import { StompService } from './services/stomp.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TenderComponent,
    UserComponent,
    BidComponent,
    AuthComponent,
    HomeComponent,
    TenderWiseBidComponent,
    CreateTenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StompService],
  bootstrap: [AppComponent]
})
export class AppModule { }
