import { Test, TestingModule } from '@nestjs/testing';
import { PersonTypesService } from './person-types.service';

describe('PersonTypesService', () => {
  let service: PersonTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonTypesService],
    }).compile();

    service = module.get<PersonTypesService>(PersonTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
