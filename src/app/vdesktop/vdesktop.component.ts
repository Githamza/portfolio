import { Component, Output, ViewEncapsulation, OnInit } from '@angular/core';
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';

declare var particlesJS: any;
@Component({
  selector: 'app-vdesktop',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './vdesktop.component.html',
  styleUrls: ['./vdesktop.component.css']
})
export class VdesktopComponent implements OnInit {
innerHeight: any

  title = 'app';

  @Output() public options: MnFullpageOptions = new MnFullpageOptions({
         autoScrolling:true,
         controlArrows :false,
         fitToSection: false,
         navigation:true,
         keyboardScrolling:true,
        slidesNavigation:true,
        slidesNavPosition:top,
         verticalCentered:false,
         anchors: [
    'Bio', 'Formation', 'Competences',
    'Experiences', 'Contact'
]
     });
  constructor() { }

  ngOnInit() {

  this.innerHeight = (window.screen.height) ;
  console.log (this.innerHeight);
  if(this.innerHeight <640) {
  this.options=null;
  }
  console.log(this.options);

  particlesJS.load('particles-js', 'assets/particlesjs-config.json', null);
  }

}
