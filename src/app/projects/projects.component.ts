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
  Puissance4Href(){
    window.open("https://ide.c9.io/githamza/puissance4", "_blank");
}
PortfolioHref(){
  window.open("https://github.com/Githamza/portfolio", "_blank");
}

PlannerHref(){
  window.open("https://github.com/Githamza/planner", "_blank");
}
PostitHref(){
  window.open("https://c9.io/githamza/postit", "_blank");
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
