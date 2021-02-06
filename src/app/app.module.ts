import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsernameComponent } from './username/username.component';
import { GithubDisplayComponent } from './github-display/github-display.component';
import { UsernameDataComponent } from './username-data/username-data.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent,
    UserProfileComponent,
    GithubDisplayComponent,
    UsernameDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
