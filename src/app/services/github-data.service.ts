import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GithubDataService {
  constructor(private http:HttpClient) { }

  getData(page, per_page){
     return  this.http.get(`https://api.github.com/repos/jquery/jquery/issues?page=${page}&per_page=${per_page}`);
  }

}
