import { FieldValues, useForm } from 'react-hook-form';

import { Company, Inverter } from '@tha-solutions';
import InputField from './input-field';

interface InverterFormProps {
  onSubmit: (data: FieldValues) => Promise<void>;
  buttonText: string;
  editInverterData?: Inverter;
  companies?: Company[];
  isRequired: boolean;
}

const InverterForm = ({
  onSubmit,
  buttonText,
  editInverterData,
  isRequired,
  companies
}: InverterFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const inputs = [
    {
      label: 'Imagem',
      name: 'imageFile',
      type: 'file',
      required: false,
      placeholder: 'Selecione a imagem da empresa',
    },
    {
      label: 'Título',
      name: 'title',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira o título do inversor',
      value: editInverterData?.title
    },
    {
      label: 'Máxima tensão CC',
      name: 'cc_voltage',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira a máxima tensão CC',
      value: editInverterData?.cc_voltage
    },
    {
      label: 'Faixa de tensão da MPPT',
      name: 'mppt_voltage_range',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira a faixa de tensão MPPT',
      value: editInverterData?.mppt_voltage_range
    },
    {
      label: 'Corrente máxima de entrada',
      name: 'max_input_current',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira a corrente máxima de entrada',
      value: editInverterData?.max_input_current
    },
    {
      label: 'Máxima corrente curto-circuito por trackers MPPT',
      name: 'max_short_circuit_current_per_tracker',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira a máxima corrente curto-circuito por trackers MPPT',
      value: editInverterData?.max_short_circuit_current_per_tracker
    },
    {
      label: 'Número de MPPT',
      name: 'num_mppt',
      type: 'number',
      required: isRequired ? true : false,
      placeholder: 'Insira o número de MPPT',
      value: editInverterData?.num_mppt
    },
    {
      label: 'Corrente máxima de saída',
      name: 'max_output_current',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira a corrente máxima de saída',
      value: editInverterData?.max_output_current
    },
    {
      label: 'Tensão nominal de saída CA (faixa)',
      name: 'ca_nominal_power_range',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira a tensão nominal de saída CA (faixa)',
      value: editInverterData?.ca_nominal_power_range
    },
    {
      label: 'Fator de potência ajustável',
      name: 'adjustable_power_factor',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira o fator de potência ajustável',
      value: editInverterData?.adjustable_power_factor
    },
    {
      label: 'THDi',
      name: 'thdi',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira o THDi',
      value: editInverterData?.thdi
    },
    {
      label: 'Máxima eficiência',
      name: 'max_efficiency',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira a máxima eficiência',
      value: editInverterData?.max_efficiency
    },
    {
      label: 'Eficiência europeia',
      name: 'european_efficiency',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira a eficiência europeia',
      value: editInverterData?.european_efficiency
    },
    {
      label: 'Eficiência MPPT',
      name: 'mppt_efficiency',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira a eficiência MPPT',
      value: editInverterData?.mppt_efficiency
    },
    {
      label: 'Proteção de polaridade reversa CC',
      name: 'cc_reverse_polarity_protection',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira a proteção de polaridade',
      value: editInverterData?.cc_reverse_polarity_protection
    },
    {
      label: 'Interruptor CC',
      name: 'cc_switch',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira o interruptor CC',
      value: editInverterData?.cc_switch
    },
    {
      label: 'Proteção de sobretensão CC',
      name: 'cc_surge_protection',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira a proteção de sobretensão CC',
      value: editInverterData?.cc_surge_protection
    },
    {
      label: 'Proteção de sobrecorrente de saída',
      name: 'output_overcurrent_protection',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira a proteção de sobrecorrente de saída',
      value: editInverterData?.output_overcurrent_protection
    },
    {
      label: 'Proteção de sobretensão CA',
      name: 'ac_overvoltage_protection',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira a proteção de sobretensão CA',
      value: editInverterData?.ac_overvoltage_protection
    },
    {
      label: 'Monitoramento de falta à terra',
      name: 'ground_fault_monitoring',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira o monitoramento de falta à terra',
      value: editInverterData?.ground_fault_monitoring
    },
    {
      label: 'Dimensões',
      name: 'dimensions',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira as dimensões',
      value: editInverterData?.dimensions
    },
    {
      label: 'Peso',
      name: 'weight',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira o peso',
      value: editInverterData?.weight
    },
    {
      label: 'Faixa de temperatura operacional',
      name: 'operating_temperature_range',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira o faixa de temperatura operacional',
      value: editInverterData?.operating_temperature_range
    },
    {
      label: 'Auto-consumo à noite',
      name: 'nighttime_power_consumption',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira o auto-consumo à noite',
      value: editInverterData?.nighttime_power_consumption
    },
    {
      label: 'Forma de refrigeração',
      name: 'cooling',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira a forma de refrigeração',
      value: editInverterData?.cooling
    },
    {
      label: 'Grau de proteção ambiental',
      name: 'protection_degree',
      type: 'text',
      required: isRequired ? true : false,
      placeholder: 'Insira o grau de proteção ambiental',
      value: editInverterData?.protection_degree
    },
    {
      label: 'Garantia',
      name: 'warranty',
      type: 'number',
      required: isRequired ? true : false,
      placeholder: 'Insira o tempo de garantia (anos)',
      value: editInverterData?.warranty
    },
  ]

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-12 w-full"
    >
      <div className="flex flex-col w-full gap-8">
        <div>
          <label
            htmlFor="company"
            className="text-xl font-semibold leading-6 text-tertiary"
          >
            Empresa
            {isRequired && <span className="text-red-500 text-sm ml-1">*</span>}
          </label>
          <select
            {...register('id_company', { required: true })}
            id="company"
            name="company"
            defaultValue={editInverterData ? editInverterData.id_company : ''}
            required={isRequired ? true : false}
            className="w-full border-0 pl-4 py-2 mt-2.5 bg-transparent shadow-sm ring-1 ring-inset placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-tertiary text-white ring-gray-400"
          >
            {companies?.map((company) => (
              <option
                key={company.id}
                value={company.legal_name}
                className="bg-backgroundAlt2 text-base text-gray-300"
              >
                {company.legal_name}
              </option>
            ))}
          </select>
        </div>
        {inputs.map((input) => (
          <InputField
            key={input.name}
            input={input}
            register={register}
            value={input.value}
            errors={errors}
            colorLabel="tertiary"
            colorRing="ring-gray-400"
          />
        ))}
      </div>
      <button
        type="submit"
        className="bg-tertiary px-3.5 py-2.5 text-center text-xl font-semibold font-alt text-white shadow-sm transition ease-in-out hover:bg-opacity-60 hover:scale-95"
      >
        {buttonText}
      </button>
    </form>
  );
}

export default InverterForm;
