import Link from 'next/link';

import { Client } from '@tha-solutions';

import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';

interface ClientTableProps {
  clients: Client[];
  onDelete: (id: string) => void;
}

const ClientTable = ({ clients, onDelete }: ClientTableProps) => {
  return (
    <div className="overflow-x-auto pt-6">
      <table className="min-w-full divide-y divide-gray-800">
        <thead className="bg-backgroundAlt">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium text-tertiary uppercase tracking-wider hidden sm:table-cell"
            >
              Nome
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium text-tertiary uppercase tracking-wider sm:hidden"
            >
              Cliente
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium text-tertiary uppercase tracking-wider hidden sm:table-cell"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium text-tertiary uppercase tracking-wider sm:hidden"
            >
              Ações
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium text-tertiary uppercase tracking-wider hidden sm:table-cell"
            >
              Editar
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium text-tertiary uppercase tracking-wider hidden sm:table-cell"
            >
              Deletar
            </th>
          </tr>
        </thead>
        <tbody className="bg-backgroundAlt2 divide-y divide-gray-800">
          {clients.map((client) => (
            <tr key={client.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-200">{client.name}</div>
                <div className="text-sm text-gray-400 sm:hidden">
                  {client.email}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                <div className="text-sm text-gray-400">{client.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                <Link href={`/admin/editar-cliente/${client.id}`}>
                  <span className="text-indigo-400 hover:text-indigo-800">
                    <Edit />
                  </span>
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                <button
                  onClick={() => onDelete(client.id)}
                  className="text-red-400 hover:text-red-800"
                >
                  <Delete />
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap sm:hidden">
                <div className="flex items-center gap-4">
                  <Link href={`/admin/editar-cliente/${client.id}`}>
                    <span className="text-indigo-400 hover:text-indigo-800">
                      <Edit />
                    </span>
                  </Link>
                  <button
                    onClick={() => onDelete(client.id)}
                    className="text-red-400 hover:text-red-800"
                  >
                    <Delete />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientTable;
