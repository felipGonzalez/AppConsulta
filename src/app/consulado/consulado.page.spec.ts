import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsuladoPage } from './consulado.page';

describe('ConsuladoPage', () => {
  let component: ConsuladoPage;
  let fixture: ComponentFixture<ConsuladoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsuladoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsuladoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
