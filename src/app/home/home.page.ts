import {Component, OnInit} from '@angular/core';
import {MovieModel} from '../model/movie.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  movies: MovieModel[];

  constructor(private http: HttpClient) {}

  // 네이버 접속해서 데이터를 가져온다.
  ngOnInit(): void {
    this.http.get<MovieModel[]>('assets/movies.json')
        .subscribe(res => {
          this.movies = res;
          console.log(this.movies);
        });
    console.log('code.........................');
  }

}
