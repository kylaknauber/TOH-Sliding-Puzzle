import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowersOfHanoiComponent } from './towers-of-hanoi.component';

describe('TowersOfHanoiComponent', () => {
  let component: TowersOfHanoiComponent;
  let fixture: ComponentFixture<TowersOfHanoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TowersOfHanoiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TowersOfHanoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
