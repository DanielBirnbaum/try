import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildAnimalsCardComponent } from './wild-animals-card.component';

describe('WildAnimalsCardComponent', () => {
  let component: WildAnimalsCardComponent;
  let fixture: ComponentFixture<WildAnimalsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildAnimalsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildAnimalsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
