import {BaseComponent} from '../../frameworks/core.framework/index';

import {Http, Response} from '@angular/http';
import {OnInit} from '@angular/core'

import {Observable} from 'rxjs/Observable';

import {Store} from '@ngrx/store';

import {FromHttpService} from '../../frameworks/app.framework/index';


@BaseComponent({
  moduleId: module.id,
  selector: 'sd-adverts',
  templateUrl: 'adverts.component.html',
  styleUrls: ['adverts.component.css']
})
export class AdvertsComponent implements OnInit {
  public data  : Observable<any>
  public array : Array<number> = [1, 2, 3 ,4 ,5];

  constructor(private store: Store<any>, public fromHttpService: FromHttpService) { 
        
  }

  fetchData() : void {
    
  }

  ngOnInit() {
    console.log(this);
  }

}
