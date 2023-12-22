import { User } from '@tha-solutions';
import { AuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials: any): Promise<any> {
        try {
          const res = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
          });

          const user = await res.json();

          if (res.ok && user) {
            return user;
          } else {
            return null; // ou algum valor que indica credenciais inválidas
          }
        } catch (error) {
          console.error('Error during sign-in:', error);
          return null; // ou algum valor que indica erro no processo de login
        }
      }
    })
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },

  callbacks: {
    jwt: async ({ token, user, trigger, session }) => {
      if (trigger === 'update') {
        (token.user as User).imageUrl = session.imageUrl;
        (token.user as User).firstName = session.firstName;
        (token.user as User).lastName = session.lastName;
      }
      //if(user){
      //  token.userRole= user.role;
      //}
      user && (token.user = user);
      return token;
    },

    session: async ({ session, token }) => {
      const sessionData = {
        user: {
          id: (token.user as User).id,
          firstName: (token.user as User).firstName,
          lastName: (token.user as User).lastName,
          email: (token.user as User).email,
          image: (token.user as User).imageUrl as string,
          company: (token.user as User).company,
          role: (token.user as User).role
        },
        expires: session.expires
      };
      session = sessionData;

      return session;
    }
  },

  pages: {
    signIn: '/entrar'
  }
};
