import { Component, OnInit } from '@angular/core';
import {PostPreviewComponent} from './post-preview/post-preview.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  private postsPrev = [
    new PostPreviewComponent('111'),
    new PostPreviewComponent('222'),
    new PostPreviewComponent('333'),
    new PostPreviewComponent('444'),
    new PostPreviewComponent('555'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
