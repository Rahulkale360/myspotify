import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SpotifyInterceptorService } from './services/interceptors/spotify-interceptor.service';

const arr: Routes = [
 
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent}
]
 

@NgModule({
  declarations: [			
    AppComponent,
      HomeComponent,
      NavbarComponent,
      LoginComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(arr)
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SpotifyInterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }



