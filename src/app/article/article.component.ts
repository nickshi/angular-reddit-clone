import { Component, OnInit, HostBinding } from '@angular/core';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  
  constructor() {
    
  }

  voteUp() {
    
    return false;
  }

  voteDown() {
    
    return false;
  }

  ngOnInit() {
  }

}
