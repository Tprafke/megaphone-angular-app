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
  test: string = '516 Benjamin Ave..... Grand Rapids, Michigan';
  constructor(
    private route: ActivatedRoute,
    private service: MegaphoneService
  ) {}

  ngOnInit(): void {
    this.getReps();
  }

  getReps = () => {
    this.service.getData(this.test).subscribe((response) => {
      console.log(response);
      this.representatives = response.officials;
      console.log(this.representatives);
    });
  };
}
// getRecipes = () => {
//   this.route.queryParamMap.subscribe((params) => {
//     console.log(params);
//     let test: any = params['params'];
//     console.log(test);
//     this.service.getData(test).subscribe((response) => {
//       console.log(response);
//       this.recipes = response.hits;
//     });
//   });
// };
