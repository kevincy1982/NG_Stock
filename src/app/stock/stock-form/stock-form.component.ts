import { Component, OnInit } from '@angular/core';
import { Stock, StockService } from '../stock.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '../../../../node_modules/@angular/forms';
import {categoryValidator} from '../validator';



@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  formModel: FormGroup;

  stock:  Stock = new Stock(0,"",0,0,"",[]);

  categories = ["IT", "Web", "Finance"];

  constructor(private routerInfo: ActivatedRoute
            , private stockService: StockService
            , private router: Router) { }

  ngOnInit() {
    let stockId = this.routerInfo.snapshot.params['id'];
    let fb = new FormBuilder();
    this.formModel = fb.group(
      {
        name: ['',[Validators.required, Validators.minLength(3)]],
        price: ['', Validators.required],
        desc:[''],
        categories: fb.array([
          new FormControl(false),
          new FormControl(false),
          new FormControl(false)
        ], categoryValidator)
      }
    )
    this.stockService.getStock(stockId)
       .subscribe(  // http call will only be triggered when subscribe is called.
         data => {
           this.stock = data;
           this.formModel.reset({
             name: data.name,
             price: data.price,
             desc: data.desc,
             categories:[
               data.categories.indexOf(this.categories[0]) != -1,
               data.categories.indexOf(this.categories[1]) != -1,
               data.categories.indexOf(this.categories[2]) != -1
             ]
           })
        }
       );
  }

  cancel(){
     this.router.navigateByUrl('stock');
  }

  save(stock: Stock){
    let categoriesDesc = [];
    let index = 0;
    for(let i =0; i < this.categories.length; i++){
         let cat = this.formModel.value.categories;
         if(cat[i]){
           categoriesDesc.push(this.categories[i]);
         }
    }
    this.formModel.value.rating = this.stock.rating;
    this.formModel.value.categories = categoriesDesc;
    console.log(this.formModel.value);
    this.router.navigateByUrl('/stock');
  }

}
