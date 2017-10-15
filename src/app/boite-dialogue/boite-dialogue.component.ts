import { Component, OnInit, Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-boite-dialogue',
  templateUrl: './boite-dialogue.component.html',
  styleUrls: ['./boite-dialogue.component.css']
})
export class BoiteDialogueComponent implements OnInit {

constructor(
 public dialogRef: MdDialogRef<BoiteDialogueComponent>,
 @Inject(MD_DIALOG_DATA) public data: any) { }

onNoClick(): void {
 this.dialogRef.close();
}




  ngOnInit() {
  console.log(this.data.name);
  }

}
