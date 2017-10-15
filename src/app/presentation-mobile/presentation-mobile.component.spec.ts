import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationMobileComponent } from './presentation-mobile.component';

describe('PresentationMobileComponent', () => {
  let component: PresentationMobileComponent;
  let fixture: ComponentFixture<PresentationMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
