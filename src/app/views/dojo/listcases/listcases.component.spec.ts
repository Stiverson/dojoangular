import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcasesComponent } from './listcases.component';

describe('ListcasesComponent', () => {
  let component: ListcasesComponent;
  let fixture: ComponentFixture<ListcasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
