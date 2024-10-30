import { TestBed } from '@angular/core/testing';
import { ForecastItemComponent } from './forecast-item.component';

describe('ForecastItemComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForecastItemComponent],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ForecastItemComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
