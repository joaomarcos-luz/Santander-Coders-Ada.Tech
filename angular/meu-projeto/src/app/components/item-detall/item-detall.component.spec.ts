import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetallComponent } from './item-detall.component';

describe('ItemDetallComponent', () => {
  let component: ItemDetallComponent;
  let fixture: ComponentFixture<ItemDetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemDetallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemDetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
