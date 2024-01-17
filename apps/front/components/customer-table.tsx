import Link from 'next/link';

import { User } from '@tha-solutions';

import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import DeleteDialog from './delete-dialog';

interface CustomerTableProps {
  customers: User[];
  onDelete: (id: string) => void;
}

const CustomerTable = ({ customers, onDelete }: CustomerTableProps) => {
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
              className="px-6 py-3 text-left text-sm font-medium text-tertiary uppercase tracking-wider hidden sm:table-cell"
            >
              Empresa
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium text-tertiary uppercase tracking-wider md:hidden"
            >
              Ações
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium text-tertiary uppercase tracking-wider hidden md:table-cell"
            >
              Editar
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium text-tertiary uppercase tracking-wider hidden md:table-cell"
            >
              Deletar
            </th>
          </tr>
        </thead>
        <tbody className="bg-backgroundAlt2 divide-y divide-gray-800">
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-200">
                  {customer.firstName} {customer.lastName}
                </div>
                <div className="text-sm text-gray-400 sm:hidden">
                  {customer.email}
                </div>
                <div className="text-sm text-gray-400 sm:hidden">
                  {customer.company}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                <div className="text-sm text-gray-400">{customer.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                <div className="text-sm text-gray-400">{customer.company}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                <Link href={`/admin/editar-cliente/${customer.id}`}>
                  <span className="text-indigo-400 hover:text-indigo-800">
                    <Edit />
                  </span>
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                <DeleteDialog
                  title="Cliente"
                  description={customer.firstName + ' ' + customer.lastName}
                  onConfirm={() => onDelete(customer.id)}
                  isShort={true}
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap md:hidden">
                <div className="flex items-center gap-4">
                  <Link href={`/admin/editar-cliente/${customer.id}`}>
                    <span className="text-indigo-400 hover:text-indigo-800">
                      <Edit />
                    </span>
                  </Link>
                  <DeleteDialog
                    title="Cliente"
                    description={customer.firstName + ' ' + customer.lastName}
                    onConfirm={() => onDelete(customer.id)}
                    isShort={true}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
