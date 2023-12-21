import { IsNumber, IsString } from 'class-validator';

export class ResponseInverterDto {
  image: {
    url: string;
    source: string | null;
    alt: string | null;
  };

  title: string;

  @IsString()
  id_company: string;

  @IsString()
  cc_voltage: string;

  @IsString()
  mppt_voltage_range: string;

  @IsString()
  max_input_current: string;

  @IsString()
  max_short_circuit_current_per_tracker: string;

  @IsNumber()
  num_mppt: number;

  @IsString()
  max_output_current: string;

  @IsString()
  ca_nominal_power_range: string;

  @IsString()
  adjustable_power_factor: string;

  @IsString()
  thdi: string;

  @IsString()
  max_efficiency: string;

  @IsString()
  european_efficiency: string;

  @IsString()
  mppt_efficiency: string;

  @IsString()
  cc_reverse_polarity_protection: string;

  @IsString()
  cc_switch: string;

  @IsString()
  cc_surge_protection: string;

  @IsString()
  output_overcurrent_protection: string;

  @IsString()
  ac_overvoltage_protection: string;

  @IsString()
  ground_fault_monitoring: string;

  @IsString()
  dimensions: string;

  @IsString()
  weight: string;

  @IsString()
  operating_temperature_range: string;

  @IsString()
  nighttime_power_consumption: string;

  @IsString()
  cooling: string;

  @IsString()
  protection_degree: string;

  @IsString()
  warranty: string;
}
