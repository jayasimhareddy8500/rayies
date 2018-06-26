import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { Routes, RouterModule } from "@angular/router";
// import { HelpComponent } from './help/help.component';

const appRoutes: Routes = [
  // {
  //   path: '', component: WebsiteReviewComponent
  // },
  // {
  //   path: 'Website-Review', component: WebsiteReviewComponent
  // },
  // {
  //   path: 'Digital-Marketing-Review', component: DigitalmarketingreviewComponent
  // },
  // {
  //   path: 'Help', component: HelpComponent
  // }
]

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule.withServerTransition({appId:"my-app"}),
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
