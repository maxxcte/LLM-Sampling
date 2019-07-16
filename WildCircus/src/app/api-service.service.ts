import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';  // replaces previous Http service


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

 uri = 'http://localhost:3000/';

  constructor(private http:HttpClient) { }

  getArtists() {
    return this.http.get(`${this.uri}api/artists`);
}

getShows() {
  return this.http.get(`${this.uri}api/shows`);
}
}
