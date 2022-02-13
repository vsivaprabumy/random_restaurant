import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { Subject } from "rxjs";
import { AppService } from './app-services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ulventechTask';
  remainingText:number = 0;
  value:any;
  subject$ = new Subject();
  posts:any;
  postsData:any;
  postsnew:any;
  txtwordCount : any ;
  weekday = new Array(['sunday','monday','tuesday','wednesday','thursday','friday']);

  
  form = new FormGroup({
    desc: new FormControl('', [
      Validators.required, 
      Validators.minLength(3), 
      Validators.maxLength(100),
      Validators.pattern('[a-zA-Z ]*')]),
    txtUrl: new FormControl('', [
      Validators.required, 
     
      Validators.pattern('[a-zA-Z ]*')]),
    
  });

  constructor(private ser:AppService){
    
  }

  ngOnInit() {
    
    // this.subject$.subscribe(val => {
    //    this.ser.getPosts()
    //    console.log(val);
    // });

    this.getRandomRes();
    this.getRandomRes1();
    
  }
   
  get f(){
    return this.form.controls;
  }
   
  submit(){
    console.log(this.form.value);
  }

  valueChange(value:any) {
    console.log("value ::: ", value);
    if(typeof value != undefined)
    this.remainingText = 1000 - value?.length;
   }

   getRandomRes(){
     
     this.ser.getPosts().subscribe((posts : any) => this.postsData = posts);
   }

   getRandomRes1(){
    console.log("ddddd");
    //this.subject$.next(1);
    //this.subject$.complete();
    this.ser.getPostsCount().subscribe(posts => {
      this.txtwordCount = posts;
       console.log(this.txtwordCount);
    });

    
  }

  

}
