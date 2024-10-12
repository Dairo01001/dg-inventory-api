import { Test, TestingModule } from '@nestjs/testing';
import { IncomeStatusController } from './income-status.controller';
import { IncomeStatusService } from './income-status.service';

describe('IncomeStatusController', () => {
  let controller: IncomeStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncomeStatusController],
      providers: [IncomeStatusService],
    }).compile();

    controller = module.get<IncomeStatusController>(IncomeStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
