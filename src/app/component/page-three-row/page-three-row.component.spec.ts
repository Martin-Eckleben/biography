import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageThreeRowComponent } from './page-three-row.component';

describe('PageThreeRowComponent', () => {
  let component: PageThreeRowComponent;
  let fixture: ComponentFixture<PageThreeRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageThreeRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageThreeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
