import { Injectable } from '@angular/core';
import {MovieModel} from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  // 1. 검색어로 영화목록 조회
  searchMovieByKeyword(keyword: string): MovieModel[] {
    return [
      {
        "title": "<b>극한직업</b>",
        "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=167651",
        "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1676/167651_P106_141030.jpg",
        "subtitle": "Extreme Job",
        "pubDate": "2018",
        "director": "이병헌|",
        "actor": "류승룡|이하늬|진선규|이동휘|공명|",
        "userRating": "8.55"
      },
      {
        "title": "텅 커터스: 어린이 <b>극한 직업</b>",
        "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=161656",
        "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1616/161656_P01_105421.jpg",
        "subtitle": "Tongue Cutters",
        "pubDate": "2017",
        "director": "솔베이 S. 멜케로엔|",
        "actor": "",
        "userRating": "8.33"
      },
      {
        "title": "비니 존스의 <b>극한 직업</b>",
        "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=131220",
        "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1312/131220_P01_134528.jpg",
        "subtitle": "Vinnie Jones-Russia's Toughest",
        "pubDate": "2012",
        "director": "",
        "actor": "비니 존스|",
        "userRating": "0.00"
      }
    ];

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
