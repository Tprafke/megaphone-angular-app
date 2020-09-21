import { Component, OnInit } from '@angular/core';
import { MegaphoneService } from '../megaphone.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css'],
})
export class CardContainerComponent implements OnInit {
  offices: any;
  officials: any;
  placeholder = '../assets/placeholder.svg';
  constructor(
    private route: ActivatedRoute,
    private service: MegaphoneService
  ) {}

  ngOnInit(): void {
    this.getReps();
  }

  getReps = () => {
    this.route.queryParamMap.subscribe((params) => {
      console.log(params);
      let address: any = params['params'];
      console.log(address.address);
      this.service.getData(address.address).subscribe((response) => {
        //this.representatives = response;
        this.offices = response.offices;
        this.officials = response.officials;

        console.log(this.offices);

        this.officials.forEach((official, index) => {
          official.titles = [];
          official.levels = [];
          if (official.photoUrl === undefined) {
            official.photoUrl = this.placeholder;
          }
          this.offices.forEach((office) => {
            if (office.officialIndices.includes(index)) {
              official.titles.push(office.name);
              official.levels.push(office.levels);
            }
          });
        });
        console.log(this.officials);
      });
    });
  };
}
