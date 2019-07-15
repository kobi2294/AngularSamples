import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorModel } from 'src/app/state/model/color.model';
import { StateService } from 'src/app/state/services/state.service';

@Component({
  selector: 'app-colors-list',
  templateUrl: './colors-list.component.html',
  styleUrls: ['./colors-list.component.css']
})
export class ColorsListComponent implements OnInit {
  colors$: Observable<ColorModel[]>

  constructor(private state: StateService) { }

  ngOnInit() {
    this.colors$ = this.state.getAllColors();
  }
}
