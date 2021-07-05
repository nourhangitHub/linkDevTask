import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiURL : string = environment.baseUrl;
  constructor(private http : HttpClient) { }

  getNews(): Observable<any>{
    return this.http.get(this.apiURL);
  }
}

