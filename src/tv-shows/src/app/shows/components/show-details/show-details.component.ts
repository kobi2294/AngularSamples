import { DataService } from './../../../core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/core/models/show.model';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  show$: Observable<Show>;
  index$: Observable<number>;

  constructor(
    private data: DataService, 
    private router: Router,
    private route: ActivatedRoute) { }

  async ngOnInit() {
    this.index$ = this.route.params.pipe(
      map(prm => Number(prm['mispar']))
    );

    this.show$ = this.index$.pipe(
      switchMap(index => this.data.getShowDetails(index))
    )
  }

  go(index: number) {
    this.router.navigate(['shows', index]);
  }

  goEdit(index: number) {
    this.router.navigate(['shows', index, 'edit']);
  }

}
