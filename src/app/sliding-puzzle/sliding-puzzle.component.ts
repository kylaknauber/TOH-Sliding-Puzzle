import { Component } from '@angular/core';
import {CdkDrag, CdkDragDrop, DragDropModule, transferArrayItem, CdkDragEnd, CdkDragRelease} from '@angular/cdk/drag-drop';
import {NgForOf, NgIf, NgStyle, NgFor} from "@angular/common";
import {RouterOutlet, RouterLink, ActivatedRoute} from "@angular/router";
//import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sliding-puzzle',
  standalone: true,
  imports: [
    NgForOf,
    NgFor,
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
  /**
   * block1: string[] = [];
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
   */

  blocks: string[] = [];

  isWinner: boolean = false;

  constructor(private route: ActivatedRoute) {
    this.shuffle();
  }

  shuffle() {
    /**
     * this.block1 = [];
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
     */

    let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", ""];
    // Shuffle the array of numbers
    for(let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    // Add the shuffled numbers to the blocks in the puzzle
    this.blocks = [];
    numbers.forEach((num) => {
      this.blocks.push(num);
    })

    /**
     * this.block1.push(this.shuffledNumbers[0]);
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
     */
  }

  /**
   * moveBlock(event: CdkDragDrop<string[]>) {
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

    if(this.isSolved()) {
      this.isWinner = true;
    }
    else {
      this.isWinner = false;
    }

    /**
     * if(this.block1[0] === "1" && this.block2[0]=== "2" && this.block3[0] === "3" && this.block4[0] === "4" && this.block5[0] === "5" && this.block6[0] === "6" && this.block7[0] === "7" && this.block8[0] === "8" && this.block9[0] === "9" && this.block10[0] === "10" && this.block11[0] === "11" && this.block12[0] === "12" && this.block13[0] === "13" && this.block14[0] === "14" && this.block15[0] === "15") {
      this.isWinner = true;
    }
     
  }
   * 
   */

  // Move the block
  moveBlock(event: CdkDragDrop<any>) {
    const blockToMove = event.item.data
    const emptySpace = this.blocks.indexOf("");
    
    const movedBlockRow = Math.floor(blockToMove / 4);
    const movedBlockColumn = blockToMove % 4;
    const emptyBlockRow = Math.floor(emptySpace / 4);
    const emptyBlockColumn = emptySpace % 4;

    // Checking if the rows are the same and the columns are next to each other
    // or if the columns are the same and the rows are next to each other.
    // This would show that the empty space and block to move can be swapped
    const isMovable = (movedBlockRow === emptyBlockRow && Math.abs(movedBlockColumn - emptyBlockColumn) === 1) ||
    (movedBlockColumn === emptyBlockColumn && Math.abs(movedBlockRow - emptyBlockRow) === 1);

    // Check if the block can be moved, then swap the indices
    if(isMovable) {
      [this.blocks[blockToMove], this.blocks[emptySpace]] = [this.blocks[emptySpace], this.blocks[blockToMove]];
    }

    // If the entire board is solved, show win screen
    if(this.isSolved()) {
      this.isWinner = true;
    }

  }

  // Checks if the board is solved 
  isSolved() {
    let i = 0;
    while(i < 15) {
      if(this.blocks[i] !== (i + 1).toString()) {
        return false;
      }
      i++;
    }
    return true;
  }

  resetGame() {
    location.reload();
  }

}
