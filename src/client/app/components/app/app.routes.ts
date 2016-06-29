import {provideRouter, RouterConfig} from '@angular/router';

import {AboutRoutes} from '../about/about.routes';
import {HomeRoutes} from '../home/home.routes';
import {AdvertsRoutes} from '../adverts/adverts.routes';

export const routes: RouterConfig = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...AdvertsRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
