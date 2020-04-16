import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.route.params.pipe(map( data => {
      return ((+data.id + 1));
    })).subscribe((params: number) => {
      this.id = params;
    });
  }

}
