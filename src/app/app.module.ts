import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Pages/home/navbar/navbar.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { HomeComponent } from './Pages/home/home.component';
import { UserProfileComponent } from './Visitor/User/user-profile/user-profile.component';
import { AdminProfileComponent } from './Visitor/Admin/admin-profile/admin-profile.component';
import { LogoutComponent } from './Pages/logout/logout.component';
import { HeaderComponent } from './Pages/home/home-components/header/header.component';
import { FooterComponent } from './Pages/home/footer/footer.component';
import { HomeHeaderBottomPageComponent } from './Pages/home/home-components/home-header-bottom-page/home-header-bottom-page.component';
import { HomeCardsComponent } from './Pages/home/home-components/home-cards/home-cards.component';
import { MainNavbarComponent } from './Components/main-navbar/main-navbar.component';
import { HomeCrouselCardsPageComponent } from './Pages/home/home-components/home-crousel-cards-page/home-crousel-cards-page.component';
import { NovostiComponent } from './Pages/novosti/novosti.component';
import { NovostiMainPageComponent } from './Pages/novosti/novosti-components/novosti-main-page/novosti-main-page.component';
import { NovostiMainInPageComponent } from './Pages/novosti/novosti-components/novosti-main-in-page/novosti-main-in-page.component';
import { KontaktComponent } from './Pages/kontakt/kontakt.component';
import { KontaktMainPageComponent } from './Pages/kontakt/kontakt-components/kontakt-main-page/kontakt-main-page.component';
import { KontaktKontaktPageComponent } from './Pages/kontakt/kontakt-components/kontakt-kontakt-page/kontakt-kontakt-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserProfileComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeHeaderBottomPageComponent,
    HomeCardsComponent,
    MainNavbarComponent,
    HomeCrouselCardsPageComponent,
    NovostiComponent,
    NovostiMainPageComponent,
    NovostiMainInPageComponent,
    KontaktComponent,
    KontaktMainPageComponent,
    KontaktKontaktPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule, 
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }