import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  keyword: string = 'angular';

  fullName: string = 'Shekhar Ghimire';

  getFullName(): string {
    return this.fullName;
  }
}
