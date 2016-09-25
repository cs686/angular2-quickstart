/**
 * Created by song on 16/9/25.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from  '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component';

@NgModule({
    imports:[BrowserModule,
        FormsModule
    ],
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})

export class AppModule{}
