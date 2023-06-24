import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoHomeComponent } from './video-home/video-home.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
