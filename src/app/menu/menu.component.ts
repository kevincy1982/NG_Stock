import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public router: Router) { }

  menus: Array<Menu>;
  currentMenuId: number;

  ngOnInit() {
    this.menus=[
      new Menu(1, 'HomePage', 'dashboard'),
      new Menu(2, 'Stock Management', 'stock')
      //new Menu(3, 'HomePage', 'dashboard')
    ]
  }

  nav(menu: Menu){
   this.currentMenuId = menu.id;
   this.router.navigateByUrl(menu.link);
  }
}


export class Menu{
  constructor(public id: number,
              public name: string,
              public link: string){

              }
}