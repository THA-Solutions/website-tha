'use server';
import { randomUUID } from 'crypto';
import { cookies } from 'next/headers';

export async function SET(id: string = randomUUID()) {
  const cookieStore = cookies();
  const validatingCookie = await GET('token');

  if(validatingCookie){
    return validatingCookie;
  }

  const token = cookieStore.set({
    name: 'token',
    value: id,
    httpOnly: true,
    secure: true,
    path: `/`
  });

  return JSON.stringify(token);
}

export async function GET(param: string) {
  const cookieStore = cookies();

  let token = cookieStore.get(param);

  return JSON.stringify(token);
}
