'use client';

import { use } from 'react';
import { FieldValues } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { Team, TeamService } from '@tha-solutions';
import { ToastContainer, toast } from 'react-toastify';
import TeamForm from 'apps/front/components/team-form';

export default function Page({ params }: { params: { id: string } }) {
  const employee: Team = use(TeamService.getEmployeeById(params.id));
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    try {
      const { imageFile, ...content } = data;
      const formData = new FormData();

      if (imageFile[0] && typeof imageFile[0] === 'object') {
        formData.append('imageFile', imageFile[0]);
      }
      for (let key in content) {
        formData.append(key, content[key]);
      }

      await toast.promise(TeamService.updateEmployee(params.id, formData), {
        pending: 'Atualizando colaborador...',
        success: 'Colaborador atualizado com sucesso!',
        error: 'Erro ao atualizar o colaborador'
      });

      setTimeout(() => {
        router.push('/admin/equipe');
      }, 1500);
    } catch (error) {
      toast.error(`Erro ao atualizar o colaborador: ${error}`);
    }
  };

  return (
    <>
      {employee && (
        <TeamForm
          onSubmit={onSubmit}
          buttonText="ATUALIZAR"
          editTeamData={employee}
          isRequired={false}
        />
      )}
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
