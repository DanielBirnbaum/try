import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivestockPanelComponent } from './livestock-panel.component';

describe('LivestockPanelComponent', () => {
  let component: LivestockPanelComponent;
  let fixture: ComponentFixture<LivestockPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivestockPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivestockPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
