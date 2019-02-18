import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategoryComponent } from './category/category.component';
import { QuizComponent } from './quiz/quiz.component';
import { UserResultComponent } from './user-result/user-result.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

import { AppRoutingModule, routingComponents  } from './app.routes';

import { UserService } from './shared/services/user.service';
import { QuizService } from './shared/services/quiz.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

import {
  MatRadioModule, MatCheckboxModule, MatDividerModule, MatListModule, MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatGridListModule, MatChipsModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    QuizComponent,
    PageNotFoundComponent,
    routingComponents,
    UserResultComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatListModule,
    HttpModule,
    MatRadioModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatChipsModule,
    MatExpansionModule,
    FormsModule,
    MatToolbarModule,
    MatGridListModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule
  ],
  providers: [UserService, QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
