import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { CategoryComponent } from "./category/category.component";
import { LoginComponent } from "./login/login.component";
import { QuizComponent } from "./quiz/quiz.component";
import { UserResultComponent } from './user-result/user-result.component';
import { RegisterComponent } from "./register/register.component";

const appRoutes: Routes = [
  {
    path: "category",
    component: CategoryComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "quiz/:id",
    component: QuizComponent
  },
  {
    path: "result/:id",
    component: UserResultComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [CategoryComponent, LoginComponent, RegisterComponent];