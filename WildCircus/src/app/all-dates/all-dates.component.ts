import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-all-dates',
  templateUrl: './all-dates.component.html',
  styleUrls: ['./all-dates.component.scss']
})
export class AllDatesComponent implements OnInit {
  public artists;
  public shows;

  constructor(private _apiService: ApiServiceService) { }

  ngOnInit() {
    this.getArtists();
    this.getShows()
}
  
getArtists() {
     this._apiService.getArtists().subscribe(
        data => { this.artists = data},
        err => console.error(err),
        () => console.log('done loading artists')
      );
    }

    getShows() {
      this._apiService.getShows().subscribe(
         data => { this.shows = data},
         err => console.error(err),
         () => console.log('done loading shows')
       );
     }
}
