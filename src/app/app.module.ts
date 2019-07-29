import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {BookStoreComponent} from "./book-store/book-store.component";
import {BookStoreService} from "./services/book-store.service";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import {ReactiveFormsModule} from "@angular/forms";
import {RatingModule} from "ng-starrating";
import {CheckOutComponent} from "./book-store/check-out/check-out.component";
import {HeaderComponent} from "./book-store/header/header.component";
import {AuthCheckGuard} from "./services/authguard.check";

const routes: Routes = [
  {path: '', redirectTo: '/book-store', pathMatch: 'full'},
  {path: 'book-store', component: BookStoreComponent},
  {path: 'check-out', component: CheckOutComponent, canActivate: [AuthCheckGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    BookStoreComponent,
    CheckOutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    CommonModule,
    ReactiveFormsModule,
    RatingModule,
    RouterModule.forRoot(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [BookStoreService, AuthCheckGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
