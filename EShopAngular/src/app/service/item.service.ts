import { Injectable } from '@angular/core';
import { Filter } from '../model/filter';
import { Observable, of } from 'rxjs';
import { ItemPayload } from '../model/itemPayload';
import { Item } from '../model/item';

const mock_items:ItemPayload = {
  items: [
    {id: 1, name: 'Blusa Adidas M Longa', price: 90.0, category: 'Camisa', description: ''},
    {id: 2, name: 'Nike Air', price: 110.0, category: 'Sapato', description: ''},
    {id: 3, name: 'Camisa Regata Rebook', price: 45.0, category: 'Camiseta', description: ''},
    {id: 4, name: 'Casaco Pula', price: 30.0, category: 'Roupa', description: ''},
    {id: 5, name: 'Rainha Oml', price: 130.0, category: 'Sapato', description: ''},
    {id: 6, name: 'Blusa Nike Regata', price: 65.0, category: 'Camiseta', description: ''},
    {id: 7, name: 'Bola de Handball', price: 43.0, category: 'Acessórios', description: ''},
    {id: 8, name: 'Bola treino 5KG', price: 3.50, category: 'Ferramenta', description: ''},
    {id: 9, name: 'Sapato Olimpicos', price: 120.0, category: 'Sapato', description: ''}
  ],
  count: 8
};

@Injectable({
  providedIn: 'root'
})


export class ItemService {

  getItems(page:number, pageSize:number, filter:Filter): Observable<ItemPayload> {
    let filteredItems:Item[] = mock_items.items.filter(item =>
        {
          return (
            item.name.indexOf(filter.name) >= 0
            &&
            (filter.categories.length == 0 || filter.categories.includes(item.category) )
          );
        }
      );

    let payload:ItemPayload = {
      items: filteredItems.slice((page-1)*pageSize, page*pageSize),
      count: filteredItems.length
    }
    return of(payload);
  }

  getItem(id:number): Observable<Item>{
    return of(mock_items.items[id-1]);
  }


  constructor() { }
}
