import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  @Input() favoriteRef: any;
  @Output() deleted = new EventEmitter<void>();
  constructor() {}

  deleteFavorite() {
    this.deleted.emit();
  }
  ngOnInit(): void {}
}
