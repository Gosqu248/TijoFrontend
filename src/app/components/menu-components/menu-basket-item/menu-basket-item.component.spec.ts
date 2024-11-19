import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBasketItemComponent } from './menu-basket-item.component';

describe('MenuBasketItemComponent', () => {
  let component: MenuBasketItemComponent;
  let fixture: ComponentFixture<MenuBasketItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBasketItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBasketItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
