import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { AppService } from './app-services';
import { Keyobject } from './Keyobject';
import { Post } from './post.modal';
import { Subject,of } from "rxjs";

describe('AppComponent', () => {
  let compoemnt : AppComponent;
  let fixture: ComponentFixture<AppComponent>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        Keyobject
      ],
      providers:[
        AppService
      ]
    }).compileComponents();

    
    
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ulventechTask'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ulventechTask');
  });


  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ulventechTask app is running!');
  });

  // it('should create', () => {
  //   expect(compoemnt).toBeTruthy();
  // });

  it('be able to retrieve random_restaurant from the API bia GET', () => {

    const dummyPosts: Post = {
      "id": 3139,
      "uid": "6e7474c2-9be9-4060-a435-5dc0796daf32",
      "name": "JAN Grill & Tap",
      "type": "Chinese",
      "description": "Delhaize Group will achieve leading positions in food retailing in key mature and emerging markets. We accomplish our goal by developing strong regional companies benefiting from and contributing to the Groups strength, expertise and successful practices. Delhaize Group goes to market with a variety of food store formats. The Group is committed to offer a locally differentiated shopping experience to its customers in each of its markets, to deliver superior value and to maintain high social, environmental and ethical standards.",
      "review": "I first heard about this place through Instagram post. The drinks looked creative so I made it a point to give it try while in the city. Located inside American Eagle in Times Square they serve up the coolest non-alcoholic beverages. You have an array of options from tea, soda, coffee, latte, water and more. Theres countertops (with phone chargers) so youre able to stand and enjoy your beverage. This visit I opted for the Pegasus latte which was not only beautiful but tasted just as good as it looked. Great staff and great service. This is a must try if you are in the area. Im sure Ill be back soon!",
      "logo": "https://loremflickr.com/500/500/restaurant",
      "phone_number": "280-051-4580 x2011",
      "address": "Suite 921 223 Stiedemann Freeway, Lindgrenfort, CO 66317",
      "hours": {
        "monday": {
          "opens_at": "7:40 AM",
          "closes_at": "11:24 PM",
          "is_closed": false
        },
        "tuesday": {
          "opens_at": "6:56 AM",
          "closes_at": "9:16 PM",
          "is_closed": false
        },
        "wednesday": {
          "opens_at": "8:46 AM",
          "closes_at": "11:41 PM",
          "is_closed": false
        },
        "thursday": {
          "opens_at": "11:43 AM",
          "closes_at": "7:19 PM",
          "is_closed": false
        },
        "friday": {
          "opens_at": "11:13 AM",
          "closes_at": "8:39 PM",
          "is_closed": true
        },
        "saturday": {
          "opens_at": "8:15 AM",
          "closes_at": "12:37 PM",
          "is_closed": false
        },
        "sunday": {
          "opens_at": "8:21 AM",
          "closes_at": "10:56 PM",
          "is_closed": false
        }
      }
    }
    const fixture = TestBed.createComponent(AppComponent);
    const compoemnt = fixture.componentInstance;
    fixture.detectChanges();
    const ser = fixture.debugElement.injector.get(AppService);
 
   spyOn(ser, 'getPosts').and.returnValue(of([{id : 1}]));
   compoemnt.getRandomRes();
  
   expect(compoemnt.postsData).toEqual([{id : 1}]);


});

it('be able to retrieve random_restaurant from the API bia GET1', () => {

  const dummyPosts = {
    "id": 3139,
    "uid": "6e7474c2-9be9-4060-a435-5dc0796daf32",
    "name": "JAN Grill & Tap",
    "type": "Chinese",
    "description": "Delhaize Group will achieve leading positions in food retailing in key mature and emerging markets. We accomplish our goal by developing strong regional companies benefiting from and contributing to the Groups strength, expertise and successful practices. Delhaize Group goes to market with a variety of food store formats. The Group is committed to offer a locally differentiated shopping experience to its customers in each of its markets, to deliver superior value and to maintain high social, environmental and ethical standards.",
    "review": "I first heard about this place through Instagram post. The drinks looked creative so I made it a point to give it try while in the city. Located inside American Eagle in Times Square they serve up the coolest non-alcoholic beverages. You have an array of options from tea, soda, coffee, latte, water and more. Theres countertops (with phone chargers) so youre able to stand and enjoy your beverage. This visit I opted for the Pegasus latte which was not only beautiful but tasted just as good as it looked. Great staff and great service. This is a must try if you are in the area. Im sure Ill be back soon!",
    "logo": "https://loremflickr.com/500/500/restaurant",
    "phone_number": "280-051-4580 x2011",
    "address": "Suite 921 223 Stiedemann Freeway, Lindgrenfort, CO 66317",
    "hours": {
      "monday": {
        "opens_at": "7:40 AM",
        "closes_at": "11:24 PM",
        "is_closed": false
      },
      "tuesday": {
        "opens_at": "6:56 AM",
        "closes_at": "9:16 PM",
        "is_closed": false
      },
      "wednesday": {
        "opens_at": "8:46 AM",
        "closes_at": "11:41 PM",
        "is_closed": false
      },
      "thursday": {
        "opens_at": "11:43 AM",
        "closes_at": "7:19 PM",
        "is_closed": false
      },
      "friday": {
        "opens_at": "11:13 AM",
        "closes_at": "8:39 PM",
        "is_closed": true
      },
      "saturday": {
        "opens_at": "8:15 AM",
        "closes_at": "12:37 PM",
        "is_closed": false
      },
      "sunday": {
        "opens_at": "8:21 AM",
        "closes_at": "10:56 PM",
        "is_closed": false
      }
    }
  }
  const fixture = TestBed.createComponent(AppComponent);
  const compoemnt = fixture.componentInstance;
  fixture.detectChanges();
  const ser = fixture.debugElement.injector.get(AppService);

 spyOn(ser, 'getPosts').and.returnValue(of([dummyPosts]));
 compoemnt.getRandomRes();

 expect(compoemnt.postsData).toEqual([dummyPosts]);


});

it('be able to retrieve random_restaurant from the API bia GET2', () => {

  const dummyPosts = {'value' : 'and:14,To:7,the:7,of:6,our:5,to:4,in:3,a:3,sell:2,food:2,provide:2' }
  const fixture = TestBed.createComponent(AppComponent);
  const compoemnt = fixture.componentInstance;
  fixture.detectChanges();
  const ser = fixture.debugElement.injector.get(AppService);

 spyOn(ser, 'getPostsCount').and.returnValue(of(dummyPosts.value));
 compoemnt.getRandomRes1();

 expect(compoemnt.txtwordCount).toEqual(dummyPosts.value);


});

});