import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { PaginationModule } from "ngx-bootstrap/pagination";

import { AppComponent } from './app.component';
import { ArticleDaoService } from "./services/article-dao.service";
import { ArticleListComponent } from './composants/article-list/article-list.component';
import { ArticleCounterComponent } from './composants/article-counter/article-counter.component';
import { TriColonnePipe } from './pipes/tri-colonne.pipe';
import { TriVisuelDirective } from './directives/tri-visuel.directive';
import { HttpModule } from "@angular/http";
import { ArticleEditComponent } from './composants/article-edit/article-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleCounterComponent,
    TriColonnePipe,
    TriVisuelDirective,
    ArticleEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: ArticleListComponent},
      {path: 'edit/:id', component: ArticleEditComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'}
    ]),
    PaginationModule.forRoot()
  ],
  providers: [ArticleDaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
