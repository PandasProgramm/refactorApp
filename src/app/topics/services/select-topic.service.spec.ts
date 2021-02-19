import { TestBed } from '@angular/core/testing';

import { SelectTopicService } from './select-topic.service';

describe('SelectTopicService', () => {
  let service: SelectTopicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectTopicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
