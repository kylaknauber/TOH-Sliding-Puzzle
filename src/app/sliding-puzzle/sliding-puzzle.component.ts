import { Component } from '@angular/core';
import {CdkDrag, CdkDragDrop, DragDropModule, transferArrayItem} from '@angular/cdk/drag-drop';
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {RouterOutlet, RouterLink, ActivatedRoute} from "@angular/router";
//import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sliding-puzzle',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgStyle,
    DragDropModule,
    CdkDrag,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './sliding-puzzle.component.html',
  styleUrl: './sliding-puzzle.component.css'
})
export class SlidingPuzzleComponent {


  block1: string[] = [];
  block2: string[] = [];
  block3: string[] = [];
  block4: string[] = [];
  block5: string[] = [];
  block6: string[] = [];
  block7: string[] = [];
  block8: string[] = [];
  block9: string[] = [];
  block10: string[] = [];
  block11: string[] = [];
  block12: string[] = [];
  block13: string[] = [];
  block14: string[] = [];
  block15: string[] = [];
  block16: string[] = [];
  shuffledNumbers: string[] = [];

  isWinner: boolean = false;

  constructor(private route: ActivatedRoute) {
    this.shuffle();
  }

  shuffle() {
    this.block1 = [];
    this.block2 = [];
    this.block3 = [];
    this.block4 = [];
    this.block5 = [];
    this.block6 = [];
    this.block7 = [];
    this.block8 = [];
    this.block9 = [];
    this.block10 = [];
    this.block11 = [];
    this.block12 = [];
    this.block13 = [];
    this.block14 = [];
    this.block15 = [];
    this.block16 = [];

    //array of string numbers
    let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
    this.shuffledNumbers = [];
    let index;
    while (numbers.length > 0) {
      index = Math.floor(Math.random() * numbers.length);
      this.shuffledNumbers.push(numbers[index]);
      numbers.splice(index, 1);
    }

    this.block1.push(this.shuffledNumbers[0]);
    this.block2.push(this.shuffledNumbers[1]);
    this.block3.push(this.shuffledNumbers[2]);
    this.block4.push(this.shuffledNumbers[3]);
    this.block5.push(this.shuffledNumbers[4]);
    this.block6.push(this.shuffledNumbers[5]);
    this.block7.push(this.shuffledNumbers[6]);
    this.block8.push(this.shuffledNumbers[7]);
    this.block9.push(this.shuffledNumbers[8]);
    this.block10.push(this.shuffledNumbers[9]);
    this.block11.push(this.shuffledNumbers[10]);
    this.block12.push(this.shuffledNumbers[11]);
    this.block13.push(this.shuffledNumbers[12]);
    this.block14.push(this.shuffledNumbers[13]);
    this.block15.push(this.shuffledNumbers[14]);
    //this.block16.push(this.shuffledNumbers[15]);
  }

  moveBlock(event: CdkDragDrop<string[]>) {
    if (event.container.data.length === 0) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        0,
      );
    } else {
      console.log('cannot move objects where there already exists an object')
    }

    if(this.block1[0] === "1" && this.block2[0]=== "2" && this.block3[0] === "3" && this.block4[0] === "4" && this.block5[0] === "5" && this.block6[0] === "6" && this.block7[0] === "7" && this.block8[0] === "8" && this.block9[0] === "9" && this.block10[0] === "10" && this.block11[0] === "11" && this.block12[0] === "12" && this.block13[0] === "13" && this.block14[0] === "14" && this.block15[0] === "15") {
      this.isWinner = true;
    }
  }

}
