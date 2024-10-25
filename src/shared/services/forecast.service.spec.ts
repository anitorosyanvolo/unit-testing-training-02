import { TestBed } from '@angular/core/testing';
import { ForecastService } from './forecast.service';
import { provideHttpClient } from '@angular/common/http';
import { Environment } from '../environment';

describe('ForecastService', () => {
  let service: ForecastService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        ForecastService,
        provideHttpClient(),
        Environment,
      ]
    }).compileComponents();

    service = TestBed.inject(ForecastService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });
});
