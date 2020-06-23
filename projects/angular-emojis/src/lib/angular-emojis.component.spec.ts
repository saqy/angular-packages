import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularEmojisComponent } from './angular-emojis.component';

describe('AngularEmojisComponent', () => {
  let component: AngularEmojisComponent;
  let fixture: ComponentFixture<AngularEmojisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularEmojisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularEmojisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
