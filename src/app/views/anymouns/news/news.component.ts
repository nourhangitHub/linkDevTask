import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { News, NewsCategory } from 'src/app/core/models/news.model';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {
  news : News[] = [];
  newsCategory : NewsCategory[] = [];
  isNewsListPage: boolean = false;
  likeNew : boolean = false;
  subscription? : Subscription;
  isFiltered : boolean = false;
  totalLength: any;
  pageNumber : number = 1;
  category = new FormControl('');
  displayShare: boolean = false;
  constructor(private newsService: NewsService, private route : Router) { }

  ngOnInit(): void {
    this.getAllNews('');
  }

  getAllNews(filter: string): void{
    this.subscription = this.newsService.getNews().subscribe(res => {
      if(res.status === 'ok'){
        this.newsCategory = res.sourceCategory;
        res.articles.forEach((item: News) => {
          item.sourceCategoryName = res.sourceCategory.find((category: NewsCategory) => category.id === item.sourceID).name;
        });
        //sort news based on date
        res.articles.sort((a: News, b: News) => {
          return(new Date(b.publishedAt).getTime() > new Date(a.publishedAt).getTime() ? 1:-1);
        })
        if(!this.route.url.includes('News')){
          this.news = res.articles.filter((article: News) => article.showOnHomepage === true).slice(0,6);
        }else{
          this.isNewsListPage = true
          this.news = res.articles;
        }
        if(filter !== ''){
          this.filterByCategory(filter);
        }
        this.totalLength = this.news.length;
      }
    })
  }

  setCSSClass() : string{
    if(this.isNewsListPage){
      return 'new-list-container'
    }else{
       return 'home-news'
    }
  }

  toggleLike(eachNew : News) : void{
    eachNew.likeNew = !eachNew.likeNew;
  }

  toggleShareBox(eachNew : News){
    eachNew.displayShare = !eachNew.displayShare;
  }

  navegate(newId : any){
    this.route.navigate(['../Home/News', newId])
  }

  search(){
    if(this.category.value == 'all'){
      this.getAllNews('');
    }else{
      this.getAllNews(this.category.value);
    }
    
  }

  filterByCategory(filter: string) : News[]{
    this.news = this.news.filter(elemrnt => elemrnt.sourceID == filter);
    if(this.news.length > 0){
      this.isFiltered = true;
    }
    return this.news;
  }

  ngOnDestroy() : void{
    this.subscription?.unsubscribe();
  }

}
