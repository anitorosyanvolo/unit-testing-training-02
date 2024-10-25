import { TestBed } from '@angular/core/testing';
import { LocationsService } from './locations.service';
import { provideHttpClient } from '@angular/common/http';

describe('LocationsService', () => {
  let service: LocationsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        LocationsService,
        provideHttpClient(),
      ]
    }).compileComponents();

    service = TestBed.inject(LocationsService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });
});
