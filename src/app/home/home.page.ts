import {Component, OnInit} from '@angular/core';
import {MovieModel} from '../model/movie.model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {MovieService} from '../service/movie.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  searchText: string;
  movies: MovieModel[];

  constructor(private movieService: MovieService) {}

  searchMovies() {

    this.movieService.searchMovieByKeyword(this.searchText)
      .subscribe(res => {
        this.movies = res.items;
      });

    this.searchText = '';
  }

  // 네이버 접속해서 데이터를 가져온다.
  ngOnInit(): void {
    this.movieService.searchMovieByKeyword('극한직업')
      .subscribe(res => {
        this.movies = res.items;
      });
  }
}
