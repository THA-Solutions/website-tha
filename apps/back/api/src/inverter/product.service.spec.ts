import { Test, TestingModule } from '@nestjs/testing';
import { InverterService } from './inverter.service';

describe('InverterService', () => {
  let service: InverterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InverterService]
    }).compile();

    service = module.get<InverterService>(InverterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
