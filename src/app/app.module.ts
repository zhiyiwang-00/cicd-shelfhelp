import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';  
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ReadingListPageComponent } from './components/reading-list-page/reading-list-page.component';
import { BookCataloguePageComponent } from './components/book-catalogue-page/book-catalogue-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookService } from './services/book.service';
import { UserService } from './services/user.service';
import { BookDetailsPageComponent } from './components/book-details-page/book-details-page.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ReadingListPageComponent,
    BookCataloguePageComponent,
    NavbarComponent,
    BookDetailsPageComponent ,
    BookItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
  ],
  providers: [
    provideHttpClient(),
    BookService, 
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
