import { StockService } from './../stock.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { Stock } from '../stock.service';
import { FormControl } from '../../../../node_modules/@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  public stocks: Array<Stock>;
  public nameFilter: FormControl = new FormControl();

  public keyword: string;

  constructor(public router: Router, private stockService: StockService) { }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
    this.nameFilter.valueChanges.debounceTime(500)
                                .subscribe(
                                  value => this.keyword = value 
                                )
  }
  create(){
    this.router.navigateByUrl('/stock/0');
  }

  update(stock: Stock){
    this.router.navigateByUrl('/stock/' + stock.id);
  }
  

}


