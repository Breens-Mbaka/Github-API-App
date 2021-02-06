import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameDataComponent } from './username-data.component';

describe('UsernameDataComponent', () => {
  let component: UsernameDataComponent;
  let fixture: ComponentFixture<UsernameDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernameDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
