import { inverters } from '@tha-solutions';
import { cookies } from 'next/headers';

import { randomUUID } from 'crypto';

type FormatFields = {
  [key: string]: string;
};

const formatFields: FormatFields = {
  cc_voltage: 'Máxima tensão CC',
  mppt_voltage_range: 'Faixa de tensão por MPPT',
  max_input_current: 'Corrente de entrada (MAX)',
  max_short_circuit_current_per_tracker:
    'Máxima corrente curto-circuito por trackers MPP',
  num_mppt: 'Número de MPPT',
  max_output_current: 'Corrente de saída (MAX)',
  ca_nominal_power_range: 'Potência nominal de saida CA',
  adjustable_power_factor: 'Fator de potência ajustável',
  thdi: 'THDI',
  max_efficiency: 'Eficiência máxima',
  european_efficiency: 'Eficiência europeia',
  mppt_efficiency: 'Eficiência MPPT',
  cc_reverse_polarity_protection: 'Proteção de polaridade reversa CC',
  cc_switch: 'Interruptor CC',
  cc_surge_protection: 'Proteção de sobretensão CC',
  output_overcurrent_protection: 'Proteção de sobrecorrente de saída',
  ac_overvoltage_protection: 'Proteção de sobretensão CA',
  ground_fault_monitoring: 'Monitoramento de falha de aterramento',
  network_monitoring: 'Monitoramento de rede',
  dimensions: 'Dimensões',
  weight: 'Peso',
  operating_temperature_range: 'Faixa de temperatura de operação',
  nighttime_power_consumption: 'Auto-consumo noturno',
  cooling: 'Resfriamento',
  protection_degree: 'Grau de Proteção ambiental',
  warranty: 'Garantia'
};


export default async function Fichatecnica({
  params
}: {
  params: { id: string };
}) {
  const inverterData = await inverters.getInvertersDataById(params.id);


  return (
    <>
      <header>
        <h1 className="text-4xl text-white font-bold lg:text-5xl">
          {inverterData.title}
        </h1>
        <div>
          {Object.keys(inverterData).map((key, index) => {
            const formattedKey = formatFields[key];
            if (!formattedKey) return null;
            return (
              <div key={index}>
                <p>
                  {formattedKey}: {inverterData[key]}
                </p>
              </div>
            );
          })}

        </div>
      </header>
    </>
  );
}
