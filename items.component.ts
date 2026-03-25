import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {

  items: any[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItems().then(data => {
      this.items = data;
    });
  }
}
<h2>Items List</h2>

<ul>
  <li *ngFor="let item of items">
    {{ item.title }}
  </li>
</ul>
<app-items></app-items>