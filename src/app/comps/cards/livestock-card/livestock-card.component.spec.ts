import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivestockCardComponent } from './livestock-card.component';

describe('LivestockCardComponent', () => {
  let component: LivestockCardComponent;
  let fixture: ComponentFixture<LivestockCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivestockCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivestockCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
