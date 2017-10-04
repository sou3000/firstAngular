import { Component, OnInit } from '@angular/core';
import { Article } from "../../domaine/Article";
import { ActivatedRoute, Router } from "@angular/router";
import { ArticleDaoService } from "../../services/article-dao.service";

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

public editArticle : Article;

  constructor(private currentRoute: ActivatedRoute, private service: ArticleDaoService, private router: Router) {
    this.editArticle = new Article(0, '', '', '', 5);
   }

  ngOnInit() {
    console.log( this.currentRoute.snapshot.paramMap.get('id'));
    this.currentRoute.params.subscribe( params => {
       // let id = ++params['id'];
        let id = parseInt(params['id']);
        if(id !== 0) {
          this.service.findArticleById(id).then( article => this.editArticle = article)
            .catch(err => this.router.navigateByUrl('/home')); // page d'erruer
        }
        else {
          this.editArticle = new Article(0, '', '', '', 0);
        }
    })
  }

  save(monForm) {

    console.log(monForm);

    if(monForm.valid){
      if(this.editArticle.id != 0){  //update
        this.service.majArticle(this.editArticle);
      }
      else {
        this.service.addArticle(this.editArticle);
      }

      this.router.navigateByUrl('/home');
    }
  }

}
