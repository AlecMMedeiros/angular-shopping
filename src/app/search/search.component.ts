import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  public description: string = '';

  constructor(private _route: Router) {}

  public handleSearch() {
    if (this.description) {
      this._route.navigate(['products'], {
        queryParams: { description: this.description },
      });
      return;
    }
    this._route.navigate(['products'])
  }
}
