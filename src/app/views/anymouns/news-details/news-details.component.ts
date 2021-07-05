import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { News, NewsCategory } from 'src/app/core/models/news.model';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit, OnDestroy {

  constructor(private activeRoute: ActivatedRoute, private newsService: NewsService, private route : Router) { }
  newId?: number;
  newDetails?: News; 
  subscription? : Subscription;
  relatedNews : News[] = [];
  currentId? : any;
  likeNew : boolean = false;
  displayShare: boolean = false;
  ngOnInit(): void {
    this.newId = this.activeRoute.snapshot.params.id;
    if(this.newId){
      this.getAllNews();
    }
  }

  getAllNews() : void{
    this.subscription = this.newsService.getNews().subscribe( res => {
      if(res.status === 'ok'){
        res.articles.forEach((item: News) => {
          item.sourceCategoryName = res.sourceCategory.find((category: NewsCategory) => category.id === item.sourceID).name;
        });
        this.newDetails = this.getNewDetails(res.articles);
        this.relatedNews = res.articles.filter((element : News) => element.sourceCategoryName == this.newDetails?.sourceCategoryName).slice(0,3);
        console.log(this.relatedNews);
      }
    })
  }

  showDetails(newId : any){
    this.route.navigate(['../Home/News',newId]).then(() => {
      window.location.reload();
    });
  }

  getNewDetails(allNews:News[]) : any{
    return allNews.find((element : News) => element.id == this.newId)
  }

  toggleLike() : void{
    this.likeNew = !this.likeNew;
  }

  toggleShareBox(){
    this.displayShare = !this.displayShare;
  }

  ngOnDestroy() : void{
    this.subscription?.unsubscribe();
  }

}
