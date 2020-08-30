import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

baseUrl = "https://api.spotify.com/v1/";

constructor(private http: HttpClient) { }

getMusic(artist){
  return this.http.get<any>(this.baseUrl+"search?query=" +artist + "&offset=0&limit=100&type=artist");
}

getCatagories(){
  return this.http.get<any>("https://api.spotify.com/v1/browse/categories");
}

getFeturedTracks(){
  let time = new Date().toISOString();
  return this.http.get<any>("https://api.spotify.com/v1/browse/featured-playlists?country=IN&timestamp=+"+time+" +&offset=0&limit=4")
}

getNewReleases(){
  return this.http.get<any>("https://api.spotify.com/v1/browse/new-releases?country=IN&offset=0&limit=4");
}




}
