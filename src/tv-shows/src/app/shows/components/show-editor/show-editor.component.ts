import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from 'src/app/core/models/show.model';
import { DataService } from 'src/app/core/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-show-editor',
  templateUrl: './show-editor.component.html',
  styleUrls: ['./show-editor.component.css']
})
export class ShowEditorComponent implements OnInit {
  show$: Observable<Show>;
  index$: Observable<number>;

  constructor(
    private data: DataService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.index$ = this.route.params.pipe(
      map(prm => Number(prm['mispar']))
    );

    this.show$ = this.index$.pipe(
      switchMap(index => this.data.getShowDetails(index))
    )
  }

  goToDetails(index: number) {
    this.router.navigate(['shows', index]);
  }

}
