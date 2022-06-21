import { Component } from '@angular/core';
import { StoreService } from './service/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EShopAngular';

  constructor(
    public storeService: StoreService
) { }
}


