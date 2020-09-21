import { Component, OnInit } from '@angular/core';
import { MegaphoneService } from '../megaphone.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favorites = [];
  favEmails = [];
  constructor(private service: MegaphoneService) {}

  getFavorite() {
    this.favorites = this.service.getFavorite();
  }

  onDelete(index: number) {
    this.favorites.splice(index, 1);
  }

  contactFavorites = () => {
    this.favorites.forEach((favorite) => {
      this.favEmails.push(favorite.emails);
    });
  };

  ngOnInit(): void {
    this.getFavorite();
    this.contactFavorites();
  }
}
