import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {throwError,Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { Post } from './post.modal';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  posts:any;
  constructor(private http:HttpClient) { }

  getrRandomRestaurant() { 
      return "dddd"; 
  }

  getPosts(){
   
    

    return this.http.get(`https://random-data-api.com/api/restaurant/random_restaurant`);
          
 }

 getPostsCount(): Observable<any>{
    console.log("getPosts");
    

    return this.http.get(`https://random-data-api.com/api/restaurant/random_restaurant`).pipe(
             map((data) => {
                 console.log("data :::: ",data);
                 //let str = JSON.stringify(data);
                 this.posts = data;
                 console.log("this.posts ",this.posts?.description);

                let stringToSplit = this.posts?.description;
                let allTypesArray = stringToSplit.split(" ");
                console.log("ddd == ",allTypesArray);

                var mapCount = allTypesArray.reduce(function(p:any, c:any) {
                    p[c] = (p[c] || 0) + 1;
                    return p;
                }, {});

                

                console.log("map ==== ",mapCount);
                
                var newTypesArray = Object.keys(mapCount).sort(function(a, b) {
                    return mapCount[b] - mapCount[a];
                });

                var result = "";
                newTypesArray.forEach((element:any,index:number) => {if(index <= 10){ result +=  element + ":" + mapCount[element] + "," } } );
                
                return result;
             }), catchError( error => {
               return throwError( 'Capital not found!' );
             })
          )
 }
    
    
     
}