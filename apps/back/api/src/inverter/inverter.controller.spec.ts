import { Test, TestingModule } from '@nestjs/testing';
import { InverterController } from './inverter.controller';
import { InverterService } from './inverter.service';

describe('InverterController', () => {
  let controller: InverterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InverterController],
      providers: [InverterService]
    }).compile();

    controller = module.get<InverterController>(InverterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
