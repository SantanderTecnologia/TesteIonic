import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  // TODO: Create a dbMovie interface
  @Input() public movies: {
    title: string,
    list: [{
        original_title: string,
        poster_path: string
      }]
    };

  constructor() { }

  ngOnInit() {

  }

}
