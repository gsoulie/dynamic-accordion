import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }
  /**
   * Searching specific member in array
   * @param searchedId 
   * @param jsonArray 
   * @param attributeName 
   */
  arraySearch(searchedId, jsonArray, attributeName) {
    if (!attributeName) {attributeName = 'id'; } //default search on "id" member
    for (let i = 0; i < jsonArray.length; i++) {
        if (eval("jsonArray[i]." + attributeName) === searchedId) {
            return i;
        }
    }
    return -1;
  }
  predicateBy(prop){
    return function(a,b){
      if( a[prop] > b[prop]){
          return 1;
      }else if( a[prop] < b[prop] ){
          return -1;
      }
      return 0;
    }
  }
}
