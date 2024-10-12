import { Test, TestingModule } from '@nestjs/testing';
import { PersonTypesController } from './person-types.controller';
import { PersonTypesService } from './person-types.service';

describe('PersonTypesController', () => {
  let controller: PersonTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonTypesController],
      providers: [PersonTypesService],
    }).compile();

    controller = module.get<PersonTypesController>(PersonTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
