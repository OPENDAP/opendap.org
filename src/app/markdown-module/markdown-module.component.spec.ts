import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownModuleComponent } from './markdown-module.component';

describe('MarkdownModuleComponent', () => {
  let component: MarkdownModuleComponent;
  let fixture: ComponentFixture<MarkdownModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
