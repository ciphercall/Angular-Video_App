import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-home',
  templateUrl: './video-home.component.html',
  styleUrls: ['./video-home.component.css']
})
export class VideoHomeComponent {
  videos!: any[];

  constructor(private http: HttpClient) {
    this.http.get<any>('/assets/videos.json').subscribe(data => {
      this.videos = data.results;
    });
  }

  playPreview(video: any) {
    // code to play video preview
    console.log('over me!');
  }

  stopPreview(video: any) {
    // code to stop video preview
    console.log('out of me!');

  }

}
