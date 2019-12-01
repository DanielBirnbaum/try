import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildAnimalsPanelComponent } from './wild-animals-panel.component';

describe('WildAnimalsPanelComponent', () => {
  let component: WildAnimalsPanelComponent;
  let fixture: ComponentFixture<WildAnimalsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildAnimalsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildAnimalsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
