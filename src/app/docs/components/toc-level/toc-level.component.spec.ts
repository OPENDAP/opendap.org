import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TocLevelComponent } from './toc-level.component';

describe('TocLevelComponent', () => {
  let component: TocLevelComponent;
  let fixture: ComponentFixture<TocLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TocLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TocLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
