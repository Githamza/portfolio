import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Competences1Component } from './competences1.component';

describe('Competences1Component', () => {
  let component: Competences1Component;
  let fixture: ComponentFixture<Competences1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Competences1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Competences1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
