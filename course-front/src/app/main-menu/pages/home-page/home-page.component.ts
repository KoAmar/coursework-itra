import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  private postsPrev = [
    {
      name: 'pavlik',
      date: '14.06.19',
      title: 'Super',
      previewText: 'its super story',
      text: 'this story about super pavlik',
      genre: 'documentary genre',
      tags: ['PAVLICK', 'Super'],
    },
    {
      name: 'pavlik',
      date: '14.06.19',
      title: 'Super2',
      previewText: 'its super story',
      text: 'this story about super pavlik',
      genre: 'documentary genre',
      tags: ['PAVLICK', 'Super'],
    },
    {
      name: 'pavlik',
      date: '14.06.19',
      title: 'Super3',
      previewText: 'its super story',
      text: 'this story about super pavlik',
      genre: 'documentary genre',
      tags: ['PAVLICK', 'Super'],
    },
  ]
  ;

  constructor() {
  }

  ngOnInit() {
  }

}
