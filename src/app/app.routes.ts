import { Routes } from '@angular/router';
import {TowersOfHanoiComponent} from "./towers-of-hanoi/towers-of-hanoi.component";
import {SlidingPuzzleComponent} from "./sliding-puzzle/sliding-puzzle.component";

export const routes: Routes = [
  { path: 'towers-of-hanoi', component: TowersOfHanoiComponent },
  { path: 'sliding-puzzle', component: SlidingPuzzleComponent },
];
