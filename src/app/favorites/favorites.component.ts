import { Component, OnInit } from '@angular/core';
import { MegaphoneService } from '../megaphone.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favorites = [];
  constructor(private service: MegaphoneService) {}

  getFavorite() {
    this.favorites = this.service.getFavorite();
  }

  onDelete(index: number) {
    this.favorites.splice(index, 1);
  }

  ngOnInit(): void {
    this.getFavorite();
  }
}
