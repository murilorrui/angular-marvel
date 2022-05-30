import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  sidebarIsVisible: boolean = false;
  searchValue: string = '';

  constructor(
    private router: Router,
  ) {
  }

  checkRouteIsActive = (path: string) => {
    return path === this.router.url;
  }

  setSearchValue = (e: any) => {
    this.searchValue = e.target.value;
  }

  searchCharacter = () => {
    this.router.navigate(['/search'], {queryParams: { search: this.searchValue }});
    this.searchValue = '';
  }

  goTo = (path: string) => {
    this.router.navigate([path]);
  }
}
