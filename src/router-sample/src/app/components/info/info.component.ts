import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  message$: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.message$ = this.route.data.pipe(
      map(d => <string>d['msg'])
    );
  }

}
