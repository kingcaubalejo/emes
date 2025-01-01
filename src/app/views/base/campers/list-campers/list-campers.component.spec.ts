import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCampersComponent } from './list-campers.component';

describe('ListCampersComponent', () => {
  let component: ListCampersComponent;
  let fixture: ComponentFixture<ListCampersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCampersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCampersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
