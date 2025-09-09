import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TowersOfHanoiComponent} from "./towers-of-hanoi/towers-of-hanoi.component";
import {SlidingPuzzleComponent} from "./sliding-puzzle/sliding-puzzle.component";
import {NgModule} from "@angular/core";
import {NgModel} from "@angular/forms";
import {NgIf} from "@angular/common";
//import {RouterOutlet} from "@angular/router";
import {Routes, RouterModule} from "@angular/router";

/*
const routes: Routes = [
  { path: 'towers-of-hanoi', component: TowersOfHanoiComponent },
  { path: 'sliding-puzzle', component: SlidingPuzzleComponent },
];
 */
/*
const routes: ({ path: string; component: TowersOfHanoiComponent } | {
  path: string;
  component: SlidingPuzzleComponent
})[] = [
  { path: '/', component: TowersOfHanoiComponent }, // Default route
  { path: '/', component: SlidingPuzzleComponent },
  // Add more routes as needed
];

/*
@NgModule({
  imports: [RouterOutlet.routes],
  exports: [RouterOutlet]
})
 */
/*
const routes: Routes = [
  //{ path: 'app-root', component: AppComponent },
  { path: 'towers-of-hanoi', component: TowersOfHanoiComponent,  outlet: 'towers-of-hanoi'},
  { path: 'sliding-puzzle', component: SlidingPuzzleComponent, outlet: 'sliding-puzzle' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TowersOfHanoiComponent, SlidingPuzzleComponent, RouterLink, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'homework4-app';
  toh: boolean = false;
  sp: boolean = false;
}
