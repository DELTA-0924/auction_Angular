import { Component, OnInit ,HostListener,Renderer2} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuctionComponent } from './components/auction/auction.component';
import { FormsModule } from '@angular/forms';
import { IAuction } from './model/Auction';
import { Auctionservice } from './services/auction.service';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';

import { FooterComponent } from './components/footer/footer.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
class User{
  constructor(public name:string,public age:Number,public company:string){}
}
@Component({
  selector: 'app-root',
  
  standalone:true,
  imports:[RouterModule,NavigationComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[]
})
export class AppComponent{
  title="Angular-app"
  constructor(private renderer: Renderer2) {}
  @HostListener('window:load')
  onLoad() {
    this.renderer.setStyle(document.body, 'background-image', 'url("https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg")');
    this.renderer.setStyle(document.body, 'background-size', 'cover');
    this.renderer.setStyle(document.body, 'background-repeat', 'no-repeat');
    this.renderer.setStyle(document.body, 'display', 'flex');
    this.renderer.setStyle(document.body, 'justify-content', 'center');
    this.renderer.setStyle(document.body, 'align-items', 'end');
    
    // this.renderer.setStyle(document.body, 'background-position', 'center center');
  }
}
