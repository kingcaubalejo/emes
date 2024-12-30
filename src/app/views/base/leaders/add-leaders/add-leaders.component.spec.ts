import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeadersComponent } from './add-leaders.component';

describe('AddLeadersComponent', () => {
  let component: AddLeadersComponent;
  let fixture: ComponentFixture<AddLeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLeadersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
