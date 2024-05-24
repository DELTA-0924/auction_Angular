import { Routes ,RouterModule, RouterOutlet} from '@angular/router';

import { AuctionPageComponent } from './components/pages/auction-page/auction-page.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { AuctionDetailPageComponent } from './components/pages/auction-detail-page/auction-detail-page.component';
import { AuctionResolver } from './services/auction.resolver';
import { RegisrtationPageComponent } from './components/pages/regisrtation-page/regisrtation-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { CreateAuctionPageComponent } from './components/pages/create-auction-page/create-auction-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';

import { NgModule } from '@angular/core';

import { Profileresolve,Userresolve } from './services/user-profile.resolver';

export const routes: Routes = [
    {path:"",component:MainPageComponent},
    {path:"profile",component:ProfilePageComponent,data:{permission:"Read"},resolve:{user:Userresolve},canActivate:[AuthGuardService]},
    {path:"auctions",component:AuctionPageComponent},
    {path:"auction/:id",component:AuctionDetailPageComponent,resolve:{data:AuctionResolver}},
    {path:"registration",component:RegisrtationPageComponent},
    {path:"login",component:LoginPageComponent},
    {path:"create-auction",component:CreateAuctionPageComponent,canActivate:[AuthGuardService],data:{permission:"Create"}},
    {path:"**",redirectTo:"",component:MainPageComponent}
];