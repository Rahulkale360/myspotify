import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
featured: any = [];
newReleases: any;
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
     this.getTockenFromUrl();
    // this.getMusic();
    // this.getCatagories();
    this.getFeturedTracks();
    this.getNewReleases();
    
  }

  getTockenFromUrl(){
    let tocken :any = window.location.hash.substring(1).split('&').reduce((initial,item)=>{
      let parts = item.split('=');
      initial[parts[0]]= decodeURIComponent(parts[1]);
      return initial;
    },{});
    localStorage.setItem('tocken', tocken.access_token);
  }

  getMusic(){
    this.spotifyService.getMusic('sonu').subscribe(data =>{
      console.log(data);
    },err=>{
      console.log(err);
    })
  }

  getCatagories(){
    return this.spotifyService.getCatagories().subscribe(data =>{
      console.log(data);
    })
  }

  getFeturedTracks(){
    this.spotifyService.getFeturedTracks().subscribe(data =>{
      this.featured = data;
    
    })
  }

  getNewReleases(){
    this.spotifyService.getNewReleases().subscribe(data =>{
      this.newReleases = data;
      console.log(this.newReleases);
    })
  }
  
}
