import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  addToCart : number = 0;
  products = {
    name: "IPhone 15 Pro",
    price: 1200,
    color: "Dark Red",
    discount: 10,
    inStock: 20,
    pImage: "../assets/images/iphone.jpg"
  }

  getDiscountedPrice(){
    return this.products.price - (this.products.price * this.products.discount/100)
  }

  onNameChange(event:any){
   // this.name = event.target.value
   // console.log(event.target.value);
  }

  decrementCart(){
    if(this.addToCart > 0){
    this.addToCart--;
    }
  }

  incrementCart(){
    if(this.addToCart < this.products.inStock){
    this.addToCart++;
    }
  }
}
