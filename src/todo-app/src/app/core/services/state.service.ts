import { TodoItem } from './../models/todi-item.model';
import { TodoList } from './../models/todo-list.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private lists: TodoList[] = [
    // {
    //   id: 1, 
    //   caption:' Shopping', 
    //   description: 'Things to buy on our next stop to the supermarket', 
    //   icon: 'shopping_cart',
    //   color: 'blue'
    // }
  ];
  private items: TodoItem[] = [];
  private runningId: number = 0;
  
  private lists$ = new BehaviorSubject<TodoList[]>(this.lists);
  private items$ = new BehaviorSubject<TodoItem[]>(this.items);

  constructor() { }

  getAllLists(): Observable<TodoList[]> {
    return this.lists$.pipe(
      map(lists => lists.map(list => {return {...list}})));
  }

  getAllItems(): Observable<TodoItem[]> {
    return this.items$.pipe(
      map(items => items.map(item => {return {...item}})));
  }

  getItemsInList(listId: number): Observable<TodoItem[]> {
    return this.items$.pipe(
      map(items => items.filter(i => i.listId === listId))
    );
  }

  getTodoList(listId: number): Observable<TodoList> {
    return this.lists$.pipe(
      map(lists => lists.find(l => l.id === listId))
    );
  }

  getTodoItem(itemId: number): Observable<TodoItem> {
    return this.items$.pipe(
      map(items => items.find(l => l.id === itemId))
    );
  }

  private notifyLists() {
    this.lists$.next(this.lists);
  }

  private notifyItems() {
    this.items$.next(this.items);
  }

  async addList(
    caption: string, description: string, 
    color: string, icon: string): Promise<number> {
      let list: TodoList = {
        id: ++this.runningId, 
        caption: caption, 
        description: description, 
        color: color, 
        icon: icon
      };

      this.lists = [...this.lists, list];
      this.notifyLists();
      return list.id;
  }

  async addItem(listId: number, caption: string): Promise<number> {
    let item: TodoItem = {
      id: ++this.runningId, 
      caption: caption, 
      listId: listId, 
      isCompleted: false
    };

    this.items = [...this.items, item];
    this.notifyItems();
    return item.id;
  }

  async modifyList(list:TodoList) {
    // create a new array, where each item that does not correspond to the list id remains the same, 
    // and the one item that has the same id is replaced with a copy of the new item
    this.lists = this.lists.map(l => l.id === list.id ? {...list} : l); 
    this.notifyLists();
  }

  async deleteList(listId: number) {
    this.lists = this.lists.filter(l => l.id !== listId);    
    this.notifyLists();
  }

  async markAsCompleted(itemId) {
    this.items = this.items
      .map(item => (item.id !== itemId) ? item : {...item, isCompleted: true});

    this.notifyItems();
  }
}
