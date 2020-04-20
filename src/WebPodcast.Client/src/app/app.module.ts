import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PodcastComponent } from './podcast/podcast.component';
import { PodcastResolver } from './_resolver/podcast.resolver';


@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      PodcastComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      HttpClientModule
   ],
   providers: [
      PodcastResolver,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
