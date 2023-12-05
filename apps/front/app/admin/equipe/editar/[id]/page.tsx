'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { Team, team } from '@tha-solutions';

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
        console.error('Error fetching article data:', error);
      }
    };

    fetchTeamData();
  }, [params.id, setValue]);

  return (
    <div>
      <h1>{teamData?.id}</h1>
    </div>
  );
}
