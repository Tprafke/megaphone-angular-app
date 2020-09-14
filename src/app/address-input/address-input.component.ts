import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-input',
  templateUrl: './address-input.component.html',
  styleUrls: ['./address-input.component.css'],
})
export class AddressInputComponent implements OnInit {
  formattedAddress = '';

  options = {
    componentRestrictions: {
      country: ['US'],
    },
  };

  public handleAddressChange(address: any) {
    this.formattedAddress = address.formatted_address;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}

  search = (form: NgForm) => {
    console.log(form);
    this.router.navigate(['home'], {
      queryParams: {
        address: form.value.address,
      },
    });
  };
}
