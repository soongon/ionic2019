import {Component, OnInit} from '@angular/core';
import {MovieModel} from '../model/movie.model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

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
    // 파라미터 설정
    const params = new HttpParams()
        .set('query','극한직업');
    // 헤더 설정
    const headers = new HttpHeaders()
        .set('X-Naver-Client-Id','vYGdytfBsHznI2IuhhGt')
        .set('X-Naver-Client-Secret','uyJjxWtwU8');

    this.http.get<MovieModel[]>(
        'https://openapi.naver.com/v1/search/movie.json',
        {params, headers})
        .subscribe(res => {
          this.movies = res;
          console.log(this.movies);
        });
    console.log('code.........................');

    //this.getGithub();
  }

  getGithub() {
    this.http.get('https://api.github.com/users/soongon')
        .subscribe(res => {
          console.log(res);
        });
  }

}
