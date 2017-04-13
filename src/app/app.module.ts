import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {WelcomeComponent} from "./home/welcome.component";
import {ProductModule} from "./products/product.module";
import {ProductListComponent} from "./products/product-list.component";
import {ProductFilterPipe} from "./products/product-filter.pipe";
import {ProductDetailComponent} from "./products/product-detail.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductModule,
    RouterModule.forRoot([
      //{path:'products', component: ProductListComponent},
      //{path: 'product/:id', component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
    //], {useHash: true}),
  ],
  providers: [],
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
