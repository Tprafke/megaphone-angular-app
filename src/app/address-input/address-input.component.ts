import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-input',
  templateUrl: './address-input.component.html',
  styleUrls: ['./address-input.component.css'],
})
export class AddressInputComponent implements OnInit {
  formattedAddress: any = '';

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

  search = () => {
    console.log(this.formattedAddress);
    this.router.navigate(['home'], {
      queryParams: {
        address: this.formattedAddress,
      },
    });
  };
}
