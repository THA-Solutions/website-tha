// @ts-nocheck

'use client';

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Inverter, InverterService } from "@tha-solutions";
import ImageNotFound from "apps/front/components/image-not-found";
import { inverterFields } from "apps/front/constants";

import ArrowBackIosNewRounded from "@mui/icons-material/ArrowBackIosNewRounded";

export default function Page({ params }: { params: { inverter1: string, inverter2: string } }) {
  const [inverterData, setInverterData] = useState<Inverter>();
  const [inverterData2, setInverterData2] = useState<Inverter>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data1 = await InverterService.getInverterById(params.inverter1);
        const data2 = await InverterService.getInverterById(params.inverter2);

        setInverterData(data1);
        setInverterData2(data2);
      } catch (error) {
        console.error('Error fetching inverter data:', error);
      }
    };

    fetchData();
  }, [params.inverter1, params.inverter2]);

  const translateField = (field: string): string => {
    return inverterFields[field] || field;
  };

  const getColorClass = (value1: number, value2: number): string => {
    if (value1 > value2) {
      return 'bg-green-500';
    } else if (value1 < value2) {
      return 'bg-red-500';
    } else {
      return 'bg-yellow-500';
    }
  };

  const excludedFields = ['id', 'id_company', 'title', 'image', 'company'];

  return (
    <>
      <header className="flex flex-col gap-6 w-full">
        <Link
          href="/comparativo"
          className="flex items-center bg-gray-400 px-4 py-1 rounded-2xl space-x-2 text-background w-fit transition-all hover:bg-gray-700 cursor-pointer"
        >
          <ArrowBackIosNewRounded fontSize="small" />
          <p className="text-base font-semibold">VOLTAR</p>
        </Link>
        <h1 className="mt-5 text-2xl font-bold sm:uppercase sm:text-3xl">Comparação de Inversores</h1>
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:gap-6">
          <p>
            <span className="mr-1 inline-block w-4 h-4 bg-green-500"></span> Maior valor
          </p>
          <p>
            <span className="mr-1 inline-block w-4 h-4 bg-red-500"></span> Menor valor
          </p>
          <p>
            <span className="mr-1 inline-block w-4 h-4 bg-yellow-500"></span> Igual
          </p>
        </div>
      </header>

      <section className="hidden sm:flex sm:gap-12">
        <table className="border-collapse border border-gray-500 w-full">
          <thead>
            <tr>
              <th className="border border-gray-500 p-2 bg-backgroundAlt2 w-1/3">Campo</th>
              <th className="border border-gray-500 p-2 bg-backgroundAlt2 w-1/3">{inverterData?.title}</th>
              <th className="border border-gray-500 p-2 bg-backgroundAlt2 w-1/3">{inverterData2?.title}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500 p-2">Imagem do inversor</td>
              <td className="border border-gray-500 p-2">
                {inverterData?.image?.url ? (
                  <Image src={inverterData?.image.url} alt="Imagem do primeiro inversor" width={250} height={250} className="w-full h-full" />
                ) : (
                  <ImageNotFound />
                )}
              </td>
              <td className="border border-gray-500 p-2">
                {inverterData2?.image?.url ? (
                  <Image src={inverterData2?.image.url} alt="Imagem do segundo inversor" width={250} height={250} className="w-full h-full" />
                ) : (
                  <ImageNotFound />
                )}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 p-2">Empresa</td>
              <td className="border border-gray-500 p-2">
                <span className="block rounded-full p-1 text-center font-bold text-background bg-gray-300">{inverterData?.company}</span>
              </td>
              <td className="border border-gray-500 p-2">
                <span className="block rounded-full p-1 text-center font-bold text-background bg-gray-300">{inverterData2?.company}</span>
              </td>
            </tr>
            {Object.entries(inverterData ?? {}).map(([key, value]) => (
              !excludedFields.includes(key) && (
                <tr key={key}>
                  <td className="border border-gray-500 p-2">{translateField(key)}</td>
                  <td className="border border-gray-500 p-2">
                    <span className={`block rounded-full p-1 text-center font-bold text-background ${getColorClass(Number(value), Number(inverterData2?.[key]))}`}>
                      {value.toString()}
                    </span>
                  </td>
                  <td className="border border-gray-500 p-2">
                    <span className={`block rounded-full p-1 text-center font-bold text-background ${getColorClass(Number(inverterData2?.[key]), Number(value))}`}>
                      {inverterData2?.[key]?.toString()}
                    </span>
                  </td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </section>

      <section className="sm:hidden space-y-8">
        <div>
          <h2 className="border border-gray-500 p-2 bg-backgroundAlt2">{inverterData?.title}</h2>
          <div className="border border-gray-500 p-2">
            {inverterData?.image?.url ? (
              <Image src={inverterData?.image.url} alt="Imagem do primeiro inversor" width={300} height={300} className="w-full h-full" />
            ) : (
              <ImageNotFound />
            )}
          </div>

          <div className="border border-gray-500 p-2">
            Empresa: {' '}
            <span className="font-bold text-gray-100">{inverterData?.company}</span>
          </div>
          {Object.entries(inverterData ?? {}).map(([key, value]) => (
            !excludedFields.includes(key) && (
              <div key={key} className="flex gap-2 border border-gray-500 p-2 items-center">
                <span className="w-3/4 font-bold text-gray-100">{translateField(key)}:</span>
                <span className={`w-1/4 block rounded-full p-1 text-center font-bold text-background ${getColorClass(Number(value), Number(inverterData2?.[key]))}`}>
                  {value.toString()}
                </span>
              </div>
            )
          ))}
        </div>

        <div>
          <h2 className="border border-gray-500 p-2 bg-backgroundAlt2">{inverterData2?.title}</h2>
          <div className="border border-gray-500 p-2">
            {inverterData2?.image?.url ? (
              <Image src={inverterData2?.image.url} alt="Imagem do primeiro inversor" width={300} height={300} className="w-full h-full" />
            ) : (
              <ImageNotFound />
            )}
          </div>

          <div className="border border-gray-500 p-2">
            Empresa: {' '}
            <span className="font-bold text-gray-100">{inverterData2?.company}</span>
          </div>
          {Object.entries(inverterData ?? {}).map(([key, value]) => (
            !excludedFields.includes(key) && (
              <div key={key} className="flex gap-2 border border-gray-500 p-2 items-center">
                <span className="w-3/4 font-bold text-gray-100">{translateField(key)}:</span>{' '}
                <span className={`w-1/4 block rounded-full p-1 text-center font-bold text-background ${getColorClass(Number(inverterData2?.[key]), Number(value))}`}>
                  {inverterData2?.[key]?.toString()}
                </span>
              </div>
            )
          ))}
        </div>
      </section>
    </>
  );
}
