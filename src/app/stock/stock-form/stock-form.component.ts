import { Component, OnInit } from '@angular/core';
import { Stock, StockService } from '../stock.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';



@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stock: Stock;

  constructor(private routerInfo: ActivatedRoute
            , private stockService: StockService
            , private router: Router) { }

  ngOnInit() {
    let stockId = this.routerInfo.snapshot.params['id'];
    this.stock = this.stockService.getStock(stockId);
  }

  cancel(){
     this.router.navigateByUrl('stock');
  }

  save(stock: Stock){
    this.router.navigateByUrl('/stock');
  }

}
