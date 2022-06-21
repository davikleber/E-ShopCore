import { Component, OnInit } from '@angular/core';
import { CartItem } from '../model/cartItem';
import { StoreService } from '../service/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public storeService: StoreService) { }

  removeFromCart(item: CartItem){
    this.storeService.cart.removeItem(item);
  }

  emptyCart(){
    this.storeService.cart.emptyCart();
  }

  ngOnInit(): void {
  }

}
