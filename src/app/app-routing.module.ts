import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { UserProfileComponent } from './Visitor/User/user-profile/user-profile.component';
import { AdminProfileComponent } from './Visitor/Admin/admin-profile/admin-profile.component';
import { LogoutComponent } from './Pages/logout/logout.component';
import { loginGuard, logoutGuard, registerGuard, studentGuard, userGuard } from './auth.guard';
import { CompanyComponent } from './Pages/company/company.component';
import { NovostiComponent } from './Pages/novosti/novosti.component';
import { KontaktComponent } from './Pages/kontakt/kontakt.component';
import { UslugiComponent } from './Pages/uslugi/uslugi.component';
import { ZashitaProektiComponent } from './Pages/zashita-proekti/zashita-proekti.component';
import { ProyektComponent } from './Pages/proyekt/proyekt.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent, canActivate: [loginGuard]},
  {path: 'logout', component: LogoutComponent, canActivate: [logoutGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [registerGuard]},
  {path: 'user-profile', component: UserProfileComponent, canActivate: [userGuard]},
  {path: 'admin-profile', component: AdminProfileComponent, canActivate: [studentGuard]},
  {path: 'catalog', component: CompanyComponent}, // to be fixed
  {path: 'company', component: CompanyComponent},
  {path: 'shopping', component: CompanyComponent}, // to be fixed
  {path: 'novosti', component: NovostiComponent},
  {path: 'contact', component: KontaktComponent},
  {path: 'uslogi', component: UslugiComponent},
  {path: 'zashita-proekti', component: ZashitaProektiComponent},
  {path: 'proyekt', component: ProyektComponent},
  {path: 'proyekt-detail', component: ProyektComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
