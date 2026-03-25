import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  async getItems() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
  }
}