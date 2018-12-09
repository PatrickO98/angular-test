import { Injectable } from '@angular/core';
import { Images } from '../entities/images';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': '7dd22c2fc98144cea2727a1de4053716'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ImageService { 

  constructor(
    private http: HttpClient
  ) { }

  // URL to web api
  private imageSearchApi = 'https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=';

  getImages(name: string): Observable<Images> {
    return this.http.get<Images>(this.imageSearchApi+name+'&count=2', httpOptions);
  }
}
