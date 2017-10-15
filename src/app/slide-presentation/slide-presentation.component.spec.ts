import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePresentationComponent } from './slide-presentation.component';

describe('SlidePresentationComponent', () => {
  let component: SlidePresentationComponent;
  let fixture: ComponentFixture<SlidePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidePresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
