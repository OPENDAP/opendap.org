import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicRoutesService {

  public menu: any;

  constructor(private _http: HttpClient) { }

  public initRoutes() {
    return this._http.get<any>('/api/menu');
  }
}
