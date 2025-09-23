import { Component, EventEmitter, Output } from '@angular/core';
import {ActivatedRoute, RouterOutlet, RouterLink} from '@angular/router';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  DragDropModule,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
//import {NgIf} from "@angular/common";

@Component({
  selector: 'app-towers-of-hanoi',
  standalone: true,
  imports: [
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    NgForOf,
    NgIf
  ],
  templateUrl: './towers-of-hanoi.component.html',
  styleUrl: './towers-of-hanoi.component.css'
})
export class TowersOfHanoiComponent {
  tower1: string[] = ["Small Disc", "Medium Disc", "Large Disc"];
  tower2: string[] = [];
  tower3: string[] = [];
  isWinner: boolean = false;

  constructor(private route: ActivatedRoute) {
  }
  getDiskColor(name: string) {
    let diskColor;
    switch (name) {
      case "Small Disc":
        diskColor = "coral";
        break;
      case "Medium Disc":
        diskColor = "dodgerblue";
        break;
      case "Large Disc":
        diskColor = "blueviolet";
        break;
    }
    return diskColor;
  }
  getDiskWidth(name: string) {
    let diskSize;
    switch (name) {
      case "Small Disc":
        diskSize = "60px";
        break;
      case "Medium Disc":
        diskSize = "80px";
        break;
      case "Large Disc":
        diskSize = "100px";
        break;
    }
    return diskSize;
  }

  resetGame() {
    location.reload();
  }

  moveDisk(event: CdkDragDrop<string[]>) {
    console.log(event.previousContainer);
    console.log(event.container);
    console.log(event.previousIndex);
    console.log(event.currentIndex);
    console.log(this.tower1);
    console.log(this.tower2);
    console.log(this.tower3);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.currentIndex, event.currentIndex);
    } else {
      if (event.previousIndex === 0) {
        let disk = event.previousContainer.data;
        console.log(disk);
        if (disk.length === 3) {
          transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, 0);
        } else {
          if (disk === this.tower1 && disk[0] === "Medium Disc") {
            if (event.container.data[0] === "Small Disc") {
              console.log("cannot put medium disc on top of small disc")
            } else {
              transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, 0);
            }
          } else if (disk === this.tower2 && disk[0] === "Medium Disc") {
            if (event.container.data[0] === "Small Disc") {
              console.log("cannot put medium disc on top of small disc")
            } else {
              transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, 0);
            }
          } else if (disk === this.tower3 && disk[0] === "Medium Disc") {
            if (event.container.data[0] === "Small Disc") {
              console.log("cannot put medium disc on top of small disc")
            } else {
              transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, 0);
            }
          } else if (disk === this.tower1 && disk[0] === "Large Disc") {
            if (event.container.data[0] === "Small Disc" || event.container.data[0] === "Medium Disc") {
              console.log("cannot put large disc on top of small or medium disc")
            } else {
              transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, 0);
            }
          } else if (disk === this.tower2 && disk[0] === "Large Disc") {
            if (event.container.data[0] === "Small Disc" || event.container.data[0] === "Medium Disc") {
              console.log("cannot put large disc on top of small or medium disc")
            } else {
              transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, 0);
            }
          } else if (disk === this.tower3 && disk[0] === "Large Disc") {
            if (event.container.data[0] === "Small Disc" || event.container.data[0] === "Medium Disc") {
              console.log("cannot put large disc on top of small or medium disc")
            } else {
              transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, 0);
            }
          }
          else if (disk === this.tower1 && disk[0] === "Small Disc") {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, 0);
          } else if (disk === this.tower2 && disk[0] === "Small Disc") {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, 0);
          } else if (disk === this.tower3 && disk[0] === "Small Disc") {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, 0);
          }
        }
      }
    }
    if (this.tower3.length === 3) {
      this.isWinner = true;
    }
  }
}
