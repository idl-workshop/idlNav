import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subtab2Page } from './subtab2.page';

describe('Subtab2Page', () => {
  let component: Subtab2Page;
  let fixture: ComponentFixture<Subtab2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subtab2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subtab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
