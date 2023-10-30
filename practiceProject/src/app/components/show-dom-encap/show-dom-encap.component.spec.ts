import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDomEncapComponent } from './show-dom-encap.component';

describe('ShowDomEncapComponent', () => {
  let component: ShowDomEncapComponent;
  let fixture: ComponentFixture<ShowDomEncapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowDomEncapComponent]
    });
    fixture = TestBed.createComponent(ShowDomEncapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
