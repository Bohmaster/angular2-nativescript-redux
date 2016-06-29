import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable';

import {Store, ActionReducer, Action} from '@ngrx/store';


/**
 * ngrx setup start --
 */
export const NAMED_LIST_ACTIONS: any = {
  INIT: `INIT`,
  NAME_ADDED: `NAME_ADDED`
};

export const fromHttpListReducer: ActionReducer<any> = (state: any = [], action: Action) => {
  switch (action.type) {
    case NAMED_LIST_ACTIONS.INIT:
      return [...action.payload];
    case NAMED_LIST_ACTIONS.NAME_ADDED:
      return [...state, action.payload];
    default:
      return state;
  }
};
/**
 * ngrx end --
 */

@Injectable()
export class FromHttpService {    
  public adverts: Observable<any>;

  constructor(private store: Store<any>, private http: Http) {
    this.adverts = store.select('adverts');

    this.init();
  }  

  init() {
    this.http.get(`assets/data.json`)
      .subscribe((results: any) => {
        this.store.dispatch({ type: NAMED_LIST_ACTIONS.INIT, payload: results });
      });
  }
 
}
