import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';
import { ProductService } from './services/product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductService]
})

export class AppComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {

  constructor(private productService: ProductService) {
    console.log('app component constructed');
  }

  ngOnDestroy(): void {
    console.log('appcompojent: destroy');
    
  }

  ngAfterContentInit(){
    console.log('apppcomponent: afercontentinit');
  }

  ngAfterContentChecked() {
    console.log('apppcomponent: afercontentchecked');
  }

  ngOnChanges(changes: SimpleChanges): void {
       console.log('appcomponent:ngonchanges');
  }

  ngOnInit() {
    console.log('appcomponent:ngoninit');

   let productList =  this.productService.productList;
   console.log('ProductService', productList)
    
  }

  ngDoCheck() {
    console.log('appcomponent:ngDocheck');
  }

  title = 'My first angular app';

  firstName: any = 'Sachin';
  lastName: any = 'Tendulkar'
  isTrue = false;


  items: any =[
    {name: 'Angular', active: true},
    {name: 'React', active: false},
    {name: 'Typescript', active: true},
    {name: 'Javascript', active: true},
    {name: 'Java', active: true}
  ]

  showAlert() {
    alert('event binding angular')
  }

  updateParnent(event: any) {
    alert(event);
  }
}
