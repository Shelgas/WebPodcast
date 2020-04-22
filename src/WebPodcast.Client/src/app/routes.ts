import { Routes } from '@angular/router';
import { PodcastComponent } from './podcast/podcast.component';
import { PodcastResolver } from './_resolver/podcast.resolver';
import { PodcastDetailComponent } from './podcast-detail/podcast-detail.component';


export const appRoutes: Routes = [
    { path: '',
     component: PodcastComponent,
     resolve: {podcasts: PodcastResolver}
    },
    { path: 'podcast/:id',
     component: PodcastDetailComponent,
    },
];
