import { Component, OnInit } from '@angular/core';
import { GiphyService } from './giphy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [GiphyService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private giphyService: GiphyService;
  giphies: GiphyResponse.Data[] = [];
  throttle = 300;
  scrollDistance = 2;

  constructor(giphyService: GiphyService) {
    this.giphyService = giphyService;
  }

  ngOnInit() {
    this.getPictures();
  }

  onScroll() {
    console.log('scrolled!!');

    this.getPictures();
  }

  private getPictures() {
    this.giphyService.getPictures().subscribe((jsonData: GiphyResponse.Data[]) => {
      this.giphies = this.giphies.concat(jsonData);
    });
  }

}
