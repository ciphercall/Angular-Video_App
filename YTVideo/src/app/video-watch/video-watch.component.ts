import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Video {
  id: string;
  url: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-video-watch',
  templateUrl: './video-watch.component.html',
  styleUrls: ['./video-watch.component.css']
})
export class VideoWatchComponent implements OnInit {
  videoId!: string;
  video!: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.videoId = params.get('id')!;
      this.loadVideo(this.videoId);
    });
  }

  loadVideo(videoId: string) {
    // Load the video data here and store it in the `video` property
    this.http.get<any>('/assets/videos.json').subscribe(data => {
      this.video = data.results.find((video:Video) => video.id === videoId);
    });
  }
}
