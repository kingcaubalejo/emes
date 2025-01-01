import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCamperComponent } from './add-camper.component';

describe('AddCamperComponent', () => {
  let component: AddCamperComponent;
  let fixture: ComponentFixture<AddCamperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCamperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCamperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
