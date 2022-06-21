import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../model/item';
import { ItemService } from '../service/item.service';
import { StoreService } from '../service/store.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item:Item = {id:0, name:"", price:0, category:"", description:""};

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private storeService: StoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.itemService.getItem(id)
      .subscribe(item => this.item = item);
  }

  addToCart(): void {
    this.storeService.cart.addItem({item: this.item, quantity: 1});
    this.router.navigate(['/cart']);
  }

}
