import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';  // replaces previous Http service
import {Artist} from './artist.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

 uri = 'http://localhost:3000/';

  constructor(private http:HttpClient) { }

  getArtists() {
    return this.http.get(`${this.uri}api/artists`);
}

getShowsSoon() {
  return this.http.get(`${this.uri}api/showsSoon`);
}

getShows() {
  return this.http.get(`${this.uri}api/shows`);
}

updateUser(artist: Artist): Observable<void> {
  return this.http.put<void>(`${this.uri}api/artist/update`, artist, {})
}


deleteArtist() {
  return this.http.delete(`${this.uri}api/show/delete/:id`);
}

}
