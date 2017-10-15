import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl,FormArray, FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { ContactService } from '../services/contact.service';
import 'rxjs/add/operator/toPromise';
import {MdSnackBar} from '@angular/material';
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';


const pureEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
moduleId: module.id,
changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
form : FormGroup;
sent:  number = 0;
  constructor ( public fb : FormBuilder, private contactService: ContactService, public snackBar: MdSnackBar, mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {

    this.form= this.fb.group({
        name:'',
        email:['', [Validators.required,Validators.pattern(pureEmail)]],
        telephone: '',
        message:''
    })
    mdIconRegistry
       .addSvgIconInNamespace('img','linkedin',
           sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/linkedin.svg'));
           mdIconRegistry
              .addSvgIconInNamespace('img','github',
                  sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/github-sign.svg'));

  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  submit() {
  console.log(this.form.value);
   this.contactService.submit(this.form.value)
   .then ((resp) => {this.sent = resp; this.openSnackBar("Votre message a été envoyé","")})

  }
}
