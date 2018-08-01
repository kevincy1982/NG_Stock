import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '../../../node_modules/@angular/router';
import 'rxjs/add/operator/filter'
import { Navigation } from '../../../node_modules/@types/selenium-webdriver';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageTitle: string = '';
  pageDesc: string = '';
  constructor(public router: Router) { 
    this.router.events.filter(event => event instanceof NavigationEnd)
    .subscribe((event: NavigationEnd) => {
      if(event.url == '/dashboard'){
        this.pageTitle = "Home Page";
        this.pageDesc = '';
      }else if(event.url.startsWith('/stock')){
        this.pageTitle = 'Stock Info Management';
        this.pageDesc = 'Modify stock info';
      }
    })
  }

  ngOnInit() {
  }

}
