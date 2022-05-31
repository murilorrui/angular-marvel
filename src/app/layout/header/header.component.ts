import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  sidebarIsVisible: boolean = false;

  constructor(
    private router: Router,
  ) {
  }

  checkRouteIsActive = (path: string) => {
    return path === this.router.url;
  }

  goTo = (path: string) => {
    this.sidebarIsVisible = false;
    this.router.navigate([path]);
  }
}
