import { Component, Input, OnInit } from '@angular/core';
import { MegaphoneService } from '../megaphone.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() repRef: any;

  constructor(private service: MegaphoneService) {}

  addFavorite(favorite: any) {
    this.service.addFavorite(favorite);
  }

  ngOnInit(): void {}
}
