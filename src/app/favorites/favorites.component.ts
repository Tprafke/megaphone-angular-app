import { Component, OnInit } from '@angular/core';
import { MegaphoneService } from '../megaphone.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favorites = [];
  favEmails = [];
  email: string;
  emailBody: string;
  emailSubject: string;
  showContact: boolean = false;
  showMessage: boolean = false;
  constructor(private service: MegaphoneService) {}

  toggleContact = () => {
    this.showContact = !this.showContact;
  };

  getFavorite() {
    this.favorites = this.service.getFavorite();
  }

  checkMessage = () => {
    this.showMessage = !this.showMessage;
  };
  send = () => {
    this.showContact = !this.showContact;
    this.showMessage = !this.showMessage;
  };

  onDelete(index: number) {
    this.favorites.splice(index, 1);
  }

  contactFavorites = () => {
    this.favorites.forEach((favorite) => {
      this.favEmails.push(favorite.emails);
    });
  };

  submit = (form: NgForm) => {
    this.emailSubject = form.value.subject;
    this.emailBody = form.value.body;
    this.email = form.value.email;
  };

  ngOnInit(): void {
    this.getFavorite();
    this.contactFavorites();
  }
}
