'use client';

import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { Team, team } from '@tha-solutions';
import { ToastContainer, toast } from 'react-toastify';
import TeamForm from 'apps/front/components/team-form';

export default function EditTeam({ params }: { params: { id: string } }) {
  const [teamData, setTeamData] = useState<Team | null>(null);
  const router = useRouter();
  const { setValue } = useForm();

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const fetchedTeamData = await team.getEmployeeById(params.id);
        setTeamData(fetchedTeamData);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };
    fetchTeamData();
  }, [params.id, setValue]);
  
  const onSubmit = async (data: FieldValues) => {
    try {


      const { imageFile, ...content } = data;

      const formData = new FormData();

      if (imageFile[0] && typeof imageFile[0] === 'object') {
        formData.append('imageFile', imageFile[0]);
      }


      formData.append('name', content.name);
      formData.append('description', content.description);
      formData.append('role', content.role);
      formData.append('linkedin', content.linkedin);
      formData.append('instagram', content.instagram);


      await toast.promise(team.updateEmployee(params.id, formData), {
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
      {teamData && (
        <TeamForm
          onSubmit={onSubmit}
          buttonText="ATUALIZAR"
          editTeamData={teamData}
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
