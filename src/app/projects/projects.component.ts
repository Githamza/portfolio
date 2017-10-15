import { Component, OnInit, Inject} from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { BoiteDialogueComponent } from '../boite-dialogue/boite-dialogue.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
animal: string;
name: string;
  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }
  openDialog(project: string): void {
  this.name=project;
  console.log(this.name);
   let dialogRef = this.dialog.open(BoiteDialogueComponent, {
     width: '70%',
     data: { name: this.name }
   });

   dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed');
     this.animal = result;
   });
 }

}
