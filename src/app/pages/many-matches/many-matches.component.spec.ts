import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyMatchesComponent } from './many-matches.component';

describe('ManyMatchesComponent', () => {
  let component: ManyMatchesComponent;
  let fixture: ComponentFixture<ManyMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManyMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManyMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
