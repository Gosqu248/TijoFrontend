import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsMainComponent } from './restaurants-main.component';

describe('RestaurantsMainComponent', () => {
  let component: RestaurantsMainComponent;
  let fixture: ComponentFixture<RestaurantsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantsMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
