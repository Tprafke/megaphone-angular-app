import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MegaphoneService {
  url: string = 'https://www.googleapis.com/civicinfo/v2/representatives';
  key: string = 'AIzaSyAjVKTJMEAntqi0_z-5GJft4T67oZPgpZs';
  currentAddress: string;
  favorites = [];

  constructor(private http: HttpClient) {}

  getData = (parameters: any): any => {
    let params: any = {};
    params.key = this.key;
    params.address = parameters;
    this.currentAddress = parameters;
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
  getAddress = () => {
    return this.currentAddress;
  };
}
