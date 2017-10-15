import { Component, Output, ViewEncapsulation, OnInit } from '@angular/core';
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';

declare var particlesJS: any;

        @Component({
          selector: 'app-root',
          encapsulation: ViewEncapsulation.None,
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        })
        export class AppComponent implements OnInit {

          constructor() {

}
ngOnInit () {


particlesJS.load('particles-js', 'assets/particlesjs-config.json', null);


}
        }
