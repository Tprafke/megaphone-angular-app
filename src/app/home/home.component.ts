import { Component, OnInit } from '@angular/core';
import { MegaphoneService } from '../megaphone.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  representatives: any;
  test: string = '7861%Quincy%St.%Zeeland%MI';

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
      this.representatives = response.hits;
    });
  };

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
}
