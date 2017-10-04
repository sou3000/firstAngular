import { Injectable } from '@angular/core';
import { Article } from "../domaine/Article";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import { Http, RequestOptionsArgs } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { DataPage } from "../domaine/DataPage";


@Injectable()
export class ArticleDaoService {

  private url = 'http://localhost:3000/articles';
  private articlesSubject: BehaviorSubject<DataPage<Article>>;

  private pageNumber: number;
  private pageSize: number;

  constructor(private http: Http) {
      this.articlesSubject = new BehaviorSubject({pageNumber: 1, pageSize: 4, total: 0, data: []});  
      this.pageNumber = 1;
      this.pageSize = 4;    //http://localhost:3000/articles?_page=2&_limit=5
   }

   public setPageNumber(num: number){
     this.pageNumber = num;
     this.refreshListe();
   }

   public refreshListe(): void {

    let options : RequestOptionsArgs = {
      params: {"_page": this.pageNumber, "_limit": this.pageSize}
    }

    this.http.get(this.url, options).map( resp => {
      let datapage: DataPage<Article> = {
        data: resp.json() as Article[],
        pageNumber: this.pageNumber,
        pageSize: this.pageSize,
        total: +resp.headers.get("X-Total-Count")
        }
      return datapage;
    })
    .toPromise()
    .then(data => {
      this.articlesSubject.next(data);
    })
   }

  public getArticleAsObservable() : Observable<DataPage<Article>> {

    return this.articlesSubject.asObservable();
  }

findArticleById(id: number) : Promise<Article> {

  return this.http.get(`${this.url}/${id}`)
  .map(resp => resp.json() as Article)
  .toPromise();
}

  public addArticle(article: Article){
    this.http.post(this.url, article).toPromise().then( resp => this.refreshListe());
  }

  public majArticle(article: Article){
    this.http.put(this.url+'/'+article.id, article).toPromise().then( resp => this.refreshListe());
  }

public deleteArticle(id: number){
    this.http.delete(this.url+'/'+id).toPromise().then( resp => this.refreshListe());
  }

}
