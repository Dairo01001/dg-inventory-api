import { Test, TestingModule } from '@nestjs/testing';
import { ReceiptTypesService } from './receipt-types.service';

describe('ReceiptTypesService', () => {
  let service: ReceiptTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReceiptTypesService],
    }).compile();

    service = module.get<ReceiptTypesService>(ReceiptTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
