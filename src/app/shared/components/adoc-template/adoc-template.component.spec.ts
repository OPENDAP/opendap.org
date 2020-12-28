import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdocTemplateComponent } from './adoc-template.component';

describe('AdocTemplateComponent', () => {
  let component: AdocTemplateComponent;
  let fixture: ComponentFixture<AdocTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdocTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdocTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
