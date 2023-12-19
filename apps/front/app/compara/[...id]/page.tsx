import { InverterService } from '@tha-solutions';

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

const compare = (a: any, b: any) => {
  for (const key in formatFields) {
    if (a[key] > b[key]) {
      a[key] = { valor: a[key], operador: 'maior' };
      b[key] = { valor: b[key], operador: 'menor' };
    } else if (a[key] < b[key]) {
      b[key] = { valor: b[key], operador: 'maior' };
      a[key] = { valor: a[key], operador: 'menor' };
    } else {
      a[key] = { valor: a[key], operador: 'igual' };
      b[key] = { valor: b[key], operador: 'igual' };
    }
  }
  return { a, b };
};

export default async function Comparacao({
  params
}: {
  params: { id: string[] };
}) {
  const inverterData = await InverterService.getInvertersDataById(
    params.id[0]
  ).then((data) => {
    const filteredData: any = {};
    for (const key in data) {
      if (formatFields[key]) {
        filteredData[key] = data[key];
      }
    }
    return filteredData;
  });

  const inverterData2 = await InverterService.getInvertersDataById(
    params.id[1]
  ).then((data) => {
    const filteredData: any = {};
    for (const key in data) {
      if (formatFields[key]) {
        filteredData[key] = data[key];
      }
    }
    return filteredData;
  });

  const compareData = compare(inverterData, inverterData2);

  return (
    <>
      <section className="flex p-10 gap-12">
        <div className="ring-1 ring-gray-500 p-2">
          <h1 className="py-2 uppercase text-primary font-bold text-xl">
            {' '}
            INVERSOR 1
          </h1>
          {Object.keys(compareData.a).map((key, index) => {
            const formattedKey = formatFields[key];
            if (formattedKey)
              return (
                <div key={index}>
                  <p>
                    {formattedKey}: {compareData.a[key].valor} -{' '}
                    <span className="text-yellow-400">
                      {compareData.a[key].operador}
                    </span>
                  </p>
                </div>
              );
          })}
        </div>
        <div className="ring-1 ring-gray-500 p-2">
          <h1 className="py-2 uppercase text-primary font-bold text-xl">
            {' '}
            INVERSOR 2
          </h1>
          {Object.keys(compareData.b).map((key, index) => {
            const formattedKey = formatFields[key];
            if (formattedKey)
              return (
                <div key={index}>
                  <p>
                    {formattedKey}: {compareData.b[key].valor} -{' '}
                    <span className="text-yellow-400">
                      {compareData.b[key].operador}
                    </span>
                  </p>
                </div>
              );
          })}
        </div>
      </section>
    </>
  );
}
