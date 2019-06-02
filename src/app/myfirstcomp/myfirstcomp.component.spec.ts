import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfirstcompComponent } from './myfirstcomp.component';

describe('MyfirstcompComponent', () => {
  let component: MyfirstcompComponent;
  let fixture: ComponentFixture<MyfirstcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfirstcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfirstcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
