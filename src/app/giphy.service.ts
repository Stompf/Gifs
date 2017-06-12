import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GiphyService {

  private readonly urlBase = 'http://api.giphy.com';
  private readonly urlPath = '/v1/gifs/random';
  private readonly apiKey = 'api_key=dc6zaTOxFJmzC';
  private readonly rating = 'rating=pg';
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  getPictures(): Observable<GiphyResponse.Data[]> {
    const url = this.urlBase + this.urlPath + '?' + this.apiKey + '&' + this.rating;
    return this.http.get(url).map(response => response.json().data as GiphyResponse.Data[]);
  }

}
