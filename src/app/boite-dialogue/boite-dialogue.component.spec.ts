import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteDialogueComponent } from './boite-dialogue.component';

describe('BoiteDialogueComponent', () => {
  let component: BoiteDialogueComponent;
  let fixture: ComponentFixture<BoiteDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoiteDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoiteDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
