import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subtab3Page } from './subtab3.page';

describe('Subtab3Page', () => {
  let component: Subtab3Page;
  let fixture: ComponentFixture<Subtab3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subtab3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subtab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
