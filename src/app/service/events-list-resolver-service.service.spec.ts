import { TestBed } from '@angular/core/testing';

import { EventsListResolverServiceService } from './events-list-resolver-service.service';

describe('EventsListResolverServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventsListResolverServiceService = TestBed.get(EventsListResolverServiceService);
    expect(service).toBeTruthy();
  });
});
