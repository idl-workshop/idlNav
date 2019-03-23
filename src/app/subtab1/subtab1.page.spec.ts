import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subtab1Page } from './subtab1.page';

describe('Subtab1Page', () => {
  let component: Subtab1Page;
  let fixture: ComponentFixture<Subtab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subtab1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subtab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
