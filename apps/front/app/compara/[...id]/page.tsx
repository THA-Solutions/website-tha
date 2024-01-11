import { InverterService, Inverter } from '@tha-solutions';
import { inverterFields } from 'apps/front/constants';
import {
  colourSelection,
  comparation
} from 'apps/front/utilities/comparation-utils';

// export default async function Comparacao({
//   params
// }: {
//   params: { id: string[] };
// }) {
//   const inverterData = await InverterService.getInverterById(
//     params.id[0]
//   ).then((data) => {
//     const filteredData: Inverter = {};
//     for (const key in data) {
//       if (inverterFields[key]) {
//         filteredData[key] = data[key];
//       }
//     }
//     return filteredData;
//   });

//   const inverterData2 = await InverterService.getInverterById(
//     params.id[1]
//   ).then((data) => {
//     const filteredData: any = {};
//     for (const key in data) {
//       if (inverterFields[key]) {
//         filteredData[key] = data[key];
//       }
//     }
//     return filteredData;
//   });

//   const compareData = comparation(inverterData, inverterData2);

//   return (
//     <>
//       <section className="flex p-10 gap-12">
//         <div className="ring-1 ring-gray-500 p-2">
//           <h1 className="py-2 uppercase text-primary font-bold text-xl">
//             {' '}
//             INVERSOR 1
//           </h1>
//           {Object.keys(compareData.firstInverter).map((key, index) => {
//             const formattedKey = inverterFields[key];
//             if (formattedKey)
//               return (
//                 <div key={index}>
//                   <p>
//                     {formattedKey}: {compareData.firstInverter[key].valor} -{' '}
//                     <span
//                       className={colourSelection({
//                         key,
//                         operador: compareData.firstInverter[key].operador
//                       })}
//                     >
//                       {compareData.firstInverter[key].operador}
//                     </span>
//                   </p>
//                 </div>
//               );
//           })}
//         </div>
//         <div className="ring-1 ring-gray-500 p-2">
//           <h1 className="py-2 uppercase text-primary font-bold text-xl">
//             {' '}
//             INVERSOR 2
//           </h1>
//           {Object.keys(compareData.secondInverter).map((key, index) => {
//             const formattedKey = inverterFields[key];
//             if (formattedKey)
//               return (
//                 <div key={index}>
//                   <p>
//                     {formattedKey}: {compareData.secondInverter[key].valor} -{' '}
//                     <span
//                       className={colourSelection({
//                         key,
//                         operador: compareData.secondInverter[key].operador
//                       })}
//                     >
//                       {compareData.secondInverter[key].operador}
//                     </span>
//                   </p>
//                 </div>
//               );
//           })}
//         </div>
//       </section>
//     </>
//   );
// }

export default function Page() {
  return (
    <>
      <h1>Comparação</h1>
    </>
  )
}
