import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleDaoService } from "../../services/article-dao.service";
import { Article } from "../../domaine/Article";
import { Observable } from "rxjs/Observable";
import { DataPage } from "../../domaine/DataPage";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit, OnDestroy {


  public articles: DataPage<Article>;
  public articleSubscript: Subscription;
  public colonneName: string;
  public direction: boolean;

  constructor(private service: ArticleDaoService) {
   // this.articles = [];
   }

  ngOnInit() {
    this.articleSubscript = this.service.getArticleAsObservable().subscribe(page => {
                  this.articles = page;
                      });
    // this.service.addArticle(new Article(1,'','','',5))

    this.colonneName = 'id';
    this.direction = true;

    this.service.refreshListe();
  }

   ngOnDestroy(): void {
    if(this.articleSubscript) this.articleSubscript.unsubscribe();
  }

  selectTri(nomCol: string){
    if(this.colonneName === nomCol) {
      this.direction = !this.direction
    }
    else {
      this.colonneName = nomCol;
      this.direction = true;
    }
  }

  delete(id: number) {
    this.service.deleteArticle(id);
  }

change(event) {
  this.service.setPageNumber(event.page);
}

}
