import { CoreValidators } from './../../core/validations/core-validators';
import { StateService } from './../../core/services/state.service';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-list-editor',
  templateUrl: './list-editor.component.html',
  styleUrls: ['./list-editor.component.css']
})
export class ListEditorComponent implements OnInit {
  list$: Observable<TodoList>;
  form: FormGroup;
  icons = [
    'shopping_cart', 
    'stars', 
    'today', 
    'work', 
    'call', 
    'flag'
  ]; 
  colors = [
    'red', 
    'blue', 
    'green', 
    'steelblue', 
    'magenta', 
    'brown', 
    'orange'
  ]

  private subs: Subscription[] = [];

  constructor(
    private state: StateService, 
    private route: ActivatedRoute, 
    private fb: FormBuilder, 
    private router: Router
    ) { }

  buildForm() {
    this.form = this.fb.group({
      id: [-1], 
      caption: ['', Validators.required], 
      description: ['', CoreValidators.counters(30, 8)], 
      icon: ['', Validators.required], 
      color: ['', Validators.required]
    });
  }

  async save() {
    const list = <TodoList>this.form.value;
    let id = list.id;
    if (id) {
      await this.state.modifyList(list);
    } else {
      id = await this.state.addList(list.caption, list.description, list.color, list.icon);
    }

    this.router.navigate(['lists', id]);

  }


  ngOnInit(): void {
    this.buildForm();
    this.list$ = this.route.params.pipe(
      map(prm => Number(prm['id'])),
      switchMap(id => this.state.getTodoList(id))
    );

    this.subs.push(
      this.list$.pipe(tap(console.log))
      .subscribe(list => this.form.reset(list))
    );
  }

}
