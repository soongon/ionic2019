import { Injectable } from '@angular/core';
import {MovieModel} from '../model/movie.model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  // 1. 검색어로 영화목록 조회
  searchMovieByKeyword(keyword: string): Observable<MovieModel[]> {

    // 파라미터 설정
    const params = new HttpParams()
      .set('query', keyword);
    // 헤더 설정
    const headers = new HttpHeaders()
      .set('X-Naver-Client-Id','vYGdytfBsHznI2IuhhGt')
      .set('X-Naver-Client-Secret','uyJjxWtwU8');

    // CORS 에러 회피용 크롬 실행 옵션
    //--user-data-dir="c:/logs" --disable-web-security
    return this.http.get<MovieModel[]>(
      'https://openapi.naver.com/v1/search/movie.json',
      {params, headers});
  }
}

/*
// 파라미터 설정
      const params = new HttpParams()
          .set('query', this.searchText);
      // 헤더 설정
      const headers = new HttpHeaders()
          .set('X-Naver-Client-Id','vYGdytfBsHznI2IuhhGt')
          .set('X-Naver-Client-Secret','uyJjxWtwU8');

      // CORS 에러 회피용 크롬 실행 옵션
      //--user-data-dir="c:/logs" --disable-web-security
      this.http.get<MovieModel[]>(
          'https://openapi.naver.com/v1/search/movie.json',
          {params, headers})
          .subscribe(res => {
              this.movies = res.items;
              console.log(this.movies);
          });
      this.searchText = '';
 */

/*
   // this.http.get<MovieModel[]>('assets/movies.json')
      //     .subscribe(res => {
      //         this.movies = res;
      //     });

    // 파라미터 설정
    const params = new HttpParams()
        .set('query','극한직업');
    // 헤더 설정
    const headers = new HttpHeaders()
        .set('X-Naver-Client-Id','vYGdytfBsHznI2IuhhGt')
        .set('X-Naver-Client-Secret','uyJjxWtwU8');

    // CORS 에러 회피용 크롬 실행 옵션
      //--user-data-dir="c:/logs" --disable-web-security
    this.http.get<MovieModel[]>(
        'https://openapi.naver.com/v1/search/movie.json',
        {params, headers})
        .subscribe(res => {
          this.movies = res.items;
          console.log(this.movies);
        });
    console.log('code.........................');

    //this.getGithub();
 */
