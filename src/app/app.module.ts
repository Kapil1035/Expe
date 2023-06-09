﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FormsModule } from '@angular/forms';;
import { SliderComponent } from './slider/slider.component';
// import { NgImageSliderModule } from 'ng-image-slider';
// import {CarouselModule} from '@coreui/angular';
// import { CarouselModule } from '@coreui/angular';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        // NgImageSliderModule
        // CarouselModule,
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LandingComponent ,
        HeaderComponent ,
        SliderComponent,
        FooterComponent ,
        MainContentComponent ,
        ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };
