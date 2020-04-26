import { Routes } from '@angular/router';
import { PodcastComponent } from './podcast/podcast.component';
import { PodcastResolver } from './_resolver/podcast.resolver';
import { PodcastDetailComponent } from './podcast-detail/podcast-detail.component';
import { PodcastDetailResolver } from './_resolver/podcastDetail.resolver';


export const appRoutes: Routes = [
    { path: '',
     component: PodcastComponent,
     resolve: {podcasts: PodcastResolver}
    },
    { path: 'podcast/:id',
     component: PodcastDetailComponent,
     resolve: {podcast: PodcastDetailResolver}
    },
];
