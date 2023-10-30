import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneEncapComponent } from './none-encap.component';

describe('NoneEncapComponent', () => {
  let component: NoneEncapComponent;
  let fixture: ComponentFixture<NoneEncapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoneEncapComponent]
    });
    fixture = TestBed.createComponent(NoneEncapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
