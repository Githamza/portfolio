import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VdesktopComponent } from './vdesktop.component';

describe('VdesktopComponent', () => {
  let component: VdesktopComponent;
  let fixture: ComponentFixture<VdesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VdesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VdesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
