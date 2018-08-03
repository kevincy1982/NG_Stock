import { Injectable } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map'


@Injectable()
export class StockService {

  constructor(public http: Http) { }

  getStocks() : Observable<Stock[]>{
    return this.http.get('/api/stock').map(res => res.json());
  }
  getStock(id: number): Observable<Stock>{
    return this.http.get('/api/stock/'+id).map(res => res.json());
  }

}

export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>

  ) {

  }
}