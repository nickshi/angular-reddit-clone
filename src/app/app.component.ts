import { Component } from '@angular/core';
import { Article } from './article/article.model'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 4', 'http://angular.io', 10),
      new Article('iOS development', 'http://developer.apple.com', 5)
    ];
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }
}
