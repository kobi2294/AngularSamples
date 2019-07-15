import { StateService } from './../../../state/services/state.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ColorModel } from 'src/app/state/model/color.model';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-color-viewer',
  templateUrl: './color-viewer.component.html',
  styleUrls: ['./color-viewer.component.css']
})
export class ColorViewerComponent implements OnInit {
  color$: Observable<ColorModel>;

  constructor(
    private state: StateService, 
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.color$ = this.route.paramMap.pipe(
      map(prms => prms.get('id')),
      switchMap(i => this.state.getColor(i))
    );
  }

}
