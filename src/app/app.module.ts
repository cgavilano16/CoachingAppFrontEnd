import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';


import { TabViewModule } from 'primeng/tabview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarGroupRightComponent } from './components/toolbar/toolbar-group-right/toolbar-group-right.component';
import { CreateScreenComponent } from './components/create/create-screen/create-screen.component';
import { CoachFormComponent } from './forms/coach-form/coach-form.component';
import { TeamFormComponent } from './forms/team-form/team-form.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerFormComponent } from './forms/player-form/player-form.component';
import { HomeComponent } from './components/home/home.component';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import { CoachViewComponent } from './components/coach-view/coach-view.component';
import { CardModule } from 'primeng/card';
import { TeamViewComponent } from './components/team-view/team-view.component';
import { PlayerViewComponent } from './components/player-view/player-view.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarGroupRightComponent,
    CreateScreenComponent,
    CoachFormComponent,
    TeamFormComponent,
    PlayerFormComponent,
    HomeComponent,
    CoachViewComponent,
    TeamViewComponent,
    PlayerViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    TabViewModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    DropdownModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
