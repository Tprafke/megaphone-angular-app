import { Component, OnInit } from '@angular/core';

import { MegaphoneService } from '../megaphone.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showNav = false;
  address: string;
  constructor(
    private service: MegaphoneService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  toggleNav = () => {
    this.showNav = !this.showNav;
  };

  goBack() {
    this.router.navigate(['home'], {
      queryParams: {
        address: this.address,
      },
    });
  }
  getAddress = () => {
    this.address = this.service.getAddress();
  };

  ngOnInit(): void {
    this.getAddress();
  }
}
