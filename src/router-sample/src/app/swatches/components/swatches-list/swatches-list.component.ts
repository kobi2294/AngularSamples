import { StateService } from 'src/app/state/services/state.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SwatchModel } from 'src/app/state/model/swatch.model';

@Component({
  selector: 'app-swatches-list',
  templateUrl: './swatches-list.component.html',
  styleUrls: ['./swatches-list.component.css']
})
export class SwatchesListComponent implements OnInit {
  swatches$: Observable<SwatchModel[]>

  constructor(private state: StateService) { }

  ngOnInit() {
    this.swatches$ = this.state.getAllSwatches();
  }
}
