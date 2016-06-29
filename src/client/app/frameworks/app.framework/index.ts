// libs
import {provideStore} from '@ngrx/store';

// app
import {nameListReducer} from './services/name-list.service';
import {fromHttpListReducer} from './services/from-http.service'
import {MULTILINGUAL_PROVIDERS, MultilingualStateI, multilingualReducer} from '../i18n.framework/index';

// state definition
export interface AppStoreI {
  i18n: MultilingualStateI;
  names: Array<string>;
  adverts: Array<string>;
};

export const APP_PROVIDERS: any[] = [
  MULTILINGUAL_PROVIDERS,
  provideStore({ 
    i18n: multilingualReducer,
    names: nameListReducer,
    adverts: fromHttpListReducer
  })
];

// services
export * from './services/app-config.service';
export * from './services/name-list.service';
export * from './services/from-http.service';

