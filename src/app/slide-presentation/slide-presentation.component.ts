import { Component, OnInit } from '@angular/core';

import Typed  from 'typed.js';


@Component({
  selector: 'app-slide-presentation',
  templateUrl: './slide-presentation.component.html',
  styleUrls: ['./slide-presentation.component.css']
})
export class SlidePresentationComponent implements OnInit {


constructor() {
     }

ngOnInit () {
 var particlesJS: any;
var typed2  = new Typed('.typed2', {
  strings: ["<b>#Font End ?</b>","<b>#Font End ?</b>","<b>#Back End ?</b>","<b> #Fullstack ?</b>", "<b>ça m'interesse !</b>"],
  typeSpeed: 30,
  backDelay: 2000,
  loop:true,

});
}
}
