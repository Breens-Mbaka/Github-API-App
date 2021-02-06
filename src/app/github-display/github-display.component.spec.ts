import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubDisplayComponent } from './github-display.component';

describe('GithubDisplayComponent', () => {
  let component: GithubDisplayComponent;
  let fixture: ComponentFixture<GithubDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
