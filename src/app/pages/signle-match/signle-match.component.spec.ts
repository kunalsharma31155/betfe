import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignleMatchComponent } from './signle-match.component';

describe('SignleMatchComponent', () => {
  let component: SignleMatchComponent;
  let fixture: ComponentFixture<SignleMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignleMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignleMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
