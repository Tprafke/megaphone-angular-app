import { Component, OnInit } from '@angular/core';
import { MegaphoneService } from '../megaphone.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css'],
})
export class CardContainerComponent implements OnInit {
  representatives: any;
  // test: string = '';
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
        console.log(response);
        this.representatives = response.officials;
        console.log(this.representatives);
      });
    });
  };
}
