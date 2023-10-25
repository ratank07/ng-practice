import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleApiComponent } from './people-api.component';

describe('PeopleApiComponent', () => {
  let component: PeopleApiComponent;
  let fixture: ComponentFixture<PeopleApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleApiComponent]
    });
    fixture = TestBed.createComponent(PeopleApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
