import { Injectable } from '@angular/core';


@Injectable()
export class StockService {

  constructor() { }

  private stocks: Stock[] = [
    new Stock(1, "first stoock", 1.99, 3.5, "this is the first stock", ["IT","Web"]),
    new Stock(2, "second stoock", 2.99, 4.0, "this is the second stock", ["IT","Finance"]),
    new Stock(3, "third stoock", 4.99, 2.5, "this is the third stock", ["web"]),
    new Stock(4, "forth stoock", 6.99, 5.0, "this is the forth stock", ["Finance","web"]),
    new Stock(5, "fifth stoock", 9.99, 4.0, "this is the fifth stock", ["IT"]),
    new Stock(6, "sixth stoock", 8.99, 4.5, "this is the sixth stock", ["Finance"]),
  ];

  getStocks() : Stock[]{
    return this.stocks;
  }
  getStock(id: number): Stock{
    let stock = this.stocks.find(stock => stock.id == id);
    if(!stock){
      stock = new Stock(0,"",0,0,null,[]);
    }
    return stock;
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