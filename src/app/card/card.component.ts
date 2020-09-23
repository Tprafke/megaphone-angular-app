import { Component, Input, OnInit } from '@angular/core';
import { MegaphoneService } from '../megaphone.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() repRef: any;
  showReps: boolean = false;
  showForm: boolean = false;
  showMessage: boolean = false;
  email: string;
  emailBody: string;
  emailSubject: string;
  toggle = true;
  constructor(private service: MegaphoneService) {}
  toggleCard = () => {
    this.showReps = !this.showReps;
  };
  toggleForm = () => {
    this.showForm = !this.showForm;
  };

  // toggleButtonColor = () => {

  // };

  checkMessage = () => {
    this.showMessage = !this.showMessage;
    // this.toggleForm();
  };

  addFavorite(favorite: any) {
    this.service.addFavorite(favorite);
    this.toggle = !this.toggle;
  }

  send = () => {
    this.showForm = !this.showForm;
    this.showMessage = !this.showMessage;
  };

  submit = (form: NgForm) => {
    this.emailSubject = form.value.subject;
    this.emailBody = form.value.body;
    this.email = form.value.email;
  };

  ngOnInit(): void {}
}
