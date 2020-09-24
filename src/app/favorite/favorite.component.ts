import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  @Input() favoriteRef: any;
  @Output() deleted = new EventEmitter<void>();
  showReps: boolean = false;
  facebook: boolean = false;
  twitter: boolean = false;
  hasEmail: boolean = true;
  hasWebsite: boolean = true;
  constructor() {}

  deleteFavorite() {
    this.deleted.emit();
  }

  checkIcons = () => {
    if (this.favoriteRef.urls === undefined) {
      this.hasWebsite = false;
    }
    if (this.favoriteRef.emails === undefined) {
      this.hasEmail = false;
    }
  };

  toggleCard = () => {
    this.showReps = !this.showReps;
  };
  ngOnInit(): void {
    this.checkIcons();
  }
}
