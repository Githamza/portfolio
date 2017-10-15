    import { Component, OnInit } from '@angular/core';
    import { MdToolbarModule } from '@angular/material';
    import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';
    import { ViewEncapsulation } from '@angular/core';
	import { ActivatedRoute } from '@angular/router';
  import 'rxjs/add/operator/filter';

    @Component({
      selector: 'app-menu-accueil',
      templateUrl: './menu-accueil.component.html',
      styleUrls: ['./menu-accueil.component.css'],
      encapsulation: ViewEncapsulation.None

    })
    export class MenuAccueilComponent implements OnInit {
    private fragment: string;
      constructor(private route: ActivatedRoute) { }

      ngOnInit() {
      this.route.fragment.subscribe(fragment => {
            if(window.document.getElementById(fragment)) {
              this.fragment = fragment;
              window.document.getElementById(this.fragment).scrollIntoView();
           }
        });
        }

    }
