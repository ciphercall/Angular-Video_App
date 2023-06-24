import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoHomeComponent } from './video-home/video-home.component';
import { VideoWatchComponent } from './video-watch/video-watch.component';

const routes: Routes = [
  {
    path:"",
    redirectTo: "video-home",
    pathMatch: "full"
  },
  {
    path: "video-home",
    component: VideoHomeComponent,
    title: "Video Home"
  },
  { path: 'watch/:id',
  component: VideoWatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
