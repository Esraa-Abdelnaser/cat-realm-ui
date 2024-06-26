import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { TimeLineComponent } from './components/time-lines/time-line/time-line.component';
import { TimeAboutComponent } from './components/time-lines/time-about/time-about.component';
import { TimeFriendsComponent } from './components/time-lines/time-friends/time-friends.component';
import { TimeAlbumComponent } from './components/time-lines/time-album/time-album.component';
import {MainPageComponent} from "./components/user-home/main-page/main-page.component";

export const routes: Routes = [
  { path: 'mainpage', component: MainPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'timeline', component: TimeLineComponent },
  { path: 'timeline-about', component: TimeAboutComponent },
  { path: 'timeline-friends', component: TimeFriendsComponent },
  { path: 'timeline-album', component: TimeAlbumComponent },
  { path: '', redirectTo: 'mainpage', pathMatch: 'full' },
  { path: '**', redirectTo: 'mainpage' },
];
