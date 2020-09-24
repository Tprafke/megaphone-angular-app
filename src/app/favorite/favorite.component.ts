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
    if (this.favoriteRef.channels === undefined) {
      this.facebook = false;
      this.twitter = false;
    } else {
      this.favoriteRef.channels.forEach((channel) => {
        if (channel.type === 'Facebook') {
          this.facebook = true;
        }
        if (channel.type === 'Twitter') {
          this.twitter = true;
        }
      });
    }
  };

  toggleCard = () => {
    this.showReps = !this.showReps;
    this.checkIcons();
  };
  ngOnInit(): void {}
}
