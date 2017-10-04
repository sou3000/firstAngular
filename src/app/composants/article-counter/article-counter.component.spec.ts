import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCounterComponent } from './article-counter.component';

describe('ArticleCounterComponent', () => {
  let component: ArticleCounterComponent;
  let fixture: ComponentFixture<ArticleCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
