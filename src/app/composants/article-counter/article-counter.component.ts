import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ArticleDaoService } from "../../services/article-dao.service";

@Component({
  selector: 'app-article-counter',
  templateUrl: './article-counter.component.html',
  styleUrls: ['./article-counter.component.css']
})
export class ArticleCounterComponent implements OnInit, OnDestroy {

  public total: number;
  private articleSubsription : Subscription;

  constructor(private service : ArticleDaoService) { }

  ngOnInit() {

    this.articleSubsription = this.service.getArticleAsObservable().subscribe(
                      articles => this.total = articles.total
    );
  }

  ngOnDestroy(){
    if(this.articleSubsription){
      this.articleSubsription.unsubscribe();
    }
  }

}
