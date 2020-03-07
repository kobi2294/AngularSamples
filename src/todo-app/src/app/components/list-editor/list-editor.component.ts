import { StateService } from './../../core/services/state.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-editor',
  templateUrl: './list-editor.component.html',
  styleUrls: ['./list-editor.component.css']
})
export class ListEditorComponent implements OnInit {
  list$: Observable<TodoList>;
  form: FormGroup;

  constructor(
    private state: StateService, 
    private route: ActivatedRoute, 
    private fb: FormBuilder
    ) { }

  buildForm() {
    this.form = this.fb.group({
      id: [-1], 
      caption: ['', Validators.required], 
      description: [''], 
      icon: ['', Validators.required], 
      color: ['', Validators.required]
    });
  }

  ngOnInit(): void {


    this.list$ = this.route.params.pipe(
      map(prm => Number(prm['id'])),
      switchMap(id => this.state.getTodoList(id))
    );
  }

}
