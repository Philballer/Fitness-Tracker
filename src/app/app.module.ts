import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { TrainingComponent } from './pages/training/training.component';
import { CurrentTrainingComponent } from './pages/current-training/current-training.component';
import { NewTrainingComponent } from './pages/new-training/new-training.component';
import { PastTrainingComponent } from './pages/past-training/past-training.component';

@NgModule({
  declarations: [AppComponent, SignUpComponent, SignInComponent, TrainingComponent, CurrentTrainingComponent, NewTrainingComponent, PastTrainingComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
