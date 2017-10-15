import { Component, OnInit } from '@angular/core';
import Typed  from 'typed.js';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-presentation-mobile',
  templateUrl: './presentation-mobile.component.html',
  styleUrls: ['./presentation-mobile.component.css']
})
export class PresentationMobileComponent implements OnInit {
 private fragment: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
   }

   ngAfterViewInit(): void {
     try {
       document.querySelector('#' + this.fragment).scrollIntoView();
     } catch (e) { }


  var particlesJS: any;
 var typed2  = new Typed('.typed2', {
   strings: ["<b>#Font End ?</b>","<b>#Font End ?</b>","<b>#Back End ?</b>","<b> #Fullstack ?</b>", "<b>ça m'interesse !</b>"],
   typeSpeed: 30,
   backDelay: 2000,
   loop:true,

 });
  }

}
