/**
 * Created by MENANetwork on 1/2/2017.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class DataService{
  constructor(private http:Http){}

  fetchData(){
    return this.http.get('https://clsads-f6a16.firebaseio.com/').map
    ( (res)=> res.json());
  }
}
