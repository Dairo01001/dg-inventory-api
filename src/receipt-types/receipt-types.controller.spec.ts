import { Test, TestingModule } from '@nestjs/testing';
import { ReceiptTypesController } from './receipt-types.controller';
import { ReceiptTypesService } from './receipt-types.service';

describe('ReceiptTypesController', () => {
  let controller: ReceiptTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReceiptTypesController],
      providers: [ReceiptTypesService],
    }).compile();

    controller = module.get<ReceiptTypesController>(ReceiptTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
