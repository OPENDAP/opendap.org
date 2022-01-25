import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownDivComponent } from './markdown-div.component';

describe('MarkdownDivComponent', () => {
  let component: MarkdownDivComponent;
  let fixture: ComponentFixture<MarkdownDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
