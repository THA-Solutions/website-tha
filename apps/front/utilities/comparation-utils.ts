import { inverterFields } from '../constants';

export const colourSelection = (data: any) => {
  //Campos selecionas que serão comparados de forma invertida,ou seja, quanto menor melhor.
  const selectedFields = ['weight', 'dimensions'];

  if (selectedFields.includes(data.key)) {
    let value =
      data.operador == 'maior'
        ? 'text-green-500'
        : data.operador == 'menor'
        ? 'text-green-400'
        : 'text-yellow-400';
    return value;
  }
  let value =
    data.operador == 'maior'
      ? 'text-green-500'
      : data.operador == 'menor'
      ? 'text-red-400'
      : 'text-yellow-400';

  return value;
};

type InverterProperty = {
  valor: any;
  operador: 'maior' | 'menor' | 'igual';
};

type Inverter = {
  [key: string]: InverterProperty;
};

export const comparation = (
  firstInverter: Inverter,
  secondInverter: Inverter
) => {
  //Campos selecionas que serão comparados de forma invertida,ou seja, quanto menor melhor.
  const selectedFields = [
    'operating_temperature_range',
    'nighttime_power_consumption'
  ];

  //Percorre os parametros definidos em inverterFields e compara os valores dos inversores 1 e 2 (first e second) determinando se cada um dos campos é maior, menor ou igual ao outro.
  for (const key in inverterFields) {
    if (selectedFields.includes(key)) {
      if (firstInverter[key] > secondInverter[key]) {
        firstInverter[key] = {
          valor: firstInverter[key],
          operador: 'menor'
        };
        secondInverter[key] = {
          valor: secondInverter[key],
          operador: 'maior'
        };
      } else if (firstInverter[key] < secondInverter[key]) {
        secondInverter[key] = {
          valor: secondInverter[key],
          operador: 'menor'
        };
        firstInverter[key] = {
          valor: firstInverter[key],
          operador: 'maior'
        };
      } else {
        firstInverter[key] = {
          valor: firstInverter[key],
          operador: 'igual'
        };
        secondInverter[key] = {
          valor: secondInverter[key],
          operador: 'igual'
        };
      }
    } else {
      if (firstInverter[key] > secondInverter[key]) {
        firstInverter[key] = {
          valor: firstInverter[key],
          operador: 'maior'
        };
        secondInverter[key] = {
          valor: secondInverter[key],
          operador: 'menor'
        };
      } else if (firstInverter[key] < secondInverter[key]) {
        secondInverter[key] = {
          valor: secondInverter[key],
          operador: 'maior'
        };
        firstInverter[key] = {
          valor: firstInverter[key],
          operador: 'menor'
        };
      } else {
        firstInverter[key] = {
          valor: firstInverter[key],
          operador: 'igual'
        };
        secondInverter[key] = {
          valor: secondInverter[key],
          operador: 'igual'
        };
      }
    }
  }

  return { firstInverter, secondInverter };
};
