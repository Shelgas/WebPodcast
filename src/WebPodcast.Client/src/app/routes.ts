import { Routes } from '@angular/router';
import { PodcastComponent } from './podcast/podcast.component';
import { PodcastResolver } from './_resolver/podcast.resolver';


export const appRoutes: Routes = [
    { path: '',
     component: PodcastComponent,
     resolve: {podcasts: PodcastResolver}
    },
];
