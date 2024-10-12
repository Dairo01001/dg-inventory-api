import { Test, TestingModule } from '@nestjs/testing';
import { IncomeStatusService } from './income-status.service';

describe('IncomeStatusService', () => {
  let service: IncomeStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncomeStatusService],
    }).compile();

    service = module.get<IncomeStatusService>(IncomeStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
