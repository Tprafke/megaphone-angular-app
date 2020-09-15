import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MegaphoneService {
  url: string = 'https://www.googleapis.com/civicinfo/v2/representatives';
  key: string = 'AIzaSyAjVKTJMEAntqi0_z-5GJft4T67oZPgpZs';

  favorites = [];

  constructor(private http: HttpClient) {}

  getData = (parameters: any): any => {
    let params: any = {};
    params.key = this.key;
    params.address = parameters;
    return this.http.get(this.url, {
      params: params,
    });
  };

  addFavorite = (card: any) => {
    let index = this.favorites.findIndex((favorite) => {
      return favorite === card;
    });
    if (index >= 0) {
      this.favorites.splice(index, 1);
    } else {
      this.favorites.push(card);
    }
  };

  getFavorite = () => {
    return this.favorites;
  };

  //  addFavorite = (recipe: any) => {
  //     let index = this.favorites.findIndex((favorite) => {
  //       return favorite === recipe;
  //     });
  //     if (index >= 0) {
  //       this.favorites.splice(index, 1);
  //     } else {
  //       this.favorites.push(recipe);
  //     }
  //   };

  // getData = (parameters: any): any => {
  //   let params: any = {};
  //   params.app_id = this.appId;
  //   params.app_key = this.key;

  //   if (parameters.term) {
  //     params.q = parameters.term;
  //   }
  //   if (parameters.diet) {
  //     params.diet = parameters.diet;
  //   }
  //   if (parameters.calories) {
  //     params.calories = parameters.calories;
  //   }
  //   return this.http.get(this.url, {
  //     params: params,
  //   });
  // };
}
