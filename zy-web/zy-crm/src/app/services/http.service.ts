import { Injectable } from '@angular/core';

// 引入 HttpClient
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  doGet(url: string) {
    return this.http.get(url)
  }

  doJSONPost(url: string, data: any){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(url, data, httpOptions)
  }

  doDelete(url: string){
    return this.http.delete(url)
  }


  doFormPost(path: string, data: any){
    const httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
    };

    const params = new HttpParams({
      fromObject: data
    })

    return this.http.post(path, params, httpOptions)
  }
}
