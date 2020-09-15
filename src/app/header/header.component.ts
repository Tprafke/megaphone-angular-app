import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MegaphoneService } from '../megaphone.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showNav = false;

  constructor(private location: Location, private service: MegaphoneService) {}
  toggleNav = () => {
    this.showNav = !this.showNav;
  };

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {}
}
