import { InverterService } from '@tha-solutions';
import { inverterFields } from '../../../constants/index';

const compare = (a: any, b: any) => {
  for (const key in inverterFields) {
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
      if (inverterFields[key]) {
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
      if (inverterFields[key]) {
        filteredData[key] = data[key];
      }
    }
    return filteredData;
  });

  const compareData = compare(inverterData, inverterData2);

  return (
    <>
      <header>
        <div>
          {Object.keys(compareData.a).map((key, index) => {
            const formattedKey = inverterFields[key];
            if (formattedKey)
              return (
                <div key={index}>
                  <p>
                    {formattedKey}: {compareData.a[key].valor} -{' '}
                    {compareData.a[key].operador}
                  </p>
                </div>
              );
          })}
        </div>
        <div>
          {Object.keys(compareData.b).map((key, index) => {
            const formattedKey = inverterFields[key];
            if (formattedKey)
              return (
                <div key={index}>
                  <p>
                    {formattedKey}: {compareData.b[key].valor} -{' '}
                    {compareData.b[key].operador}
                  </p>
                </div>
              );
          })}
        </div>
        <div></div>
      </header>
    </>
  );
}
