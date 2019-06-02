import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipiosPage } from './municipios.page';

describe('MunicipiosPage', () => {
  let component: MunicipiosPage;
  let fixture: ComponentFixture<MunicipiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipiosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
