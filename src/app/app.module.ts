import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddressInputComponent } from './address-input/address-input.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { CountdownComponent } from './countdown/countdown.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, AddressInputComponent, CardContainerComponent, HeaderComponent, CardComponent, WelcomeComponent, AboutComponent, CountdownComponent, FavoritesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
