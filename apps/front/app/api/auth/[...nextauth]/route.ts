import NextAuth from 'next-auth';
import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { User } from '@tha-solutions';
import { setEmitFlags } from 'typescript';
import { cp } from 'fs';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {
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
          }
        } catch (error) {
          throw new Error(`Sign-in error ${error}`);
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
    jwt: async ({ token, trigger, session }) => {
      if (trigger === 'update') {
        token.id = session.user.id;
        token.firstName = session.user.firstName;
        token.lastName = session.user.lastName;
        token.email = session.user.email;
        token.image = session.user.image;
        token.role = session.user.role;
        token.company = session.user.company;
      }

      return token;
    },

    session: async ({ session, token, trigger, newSession }) => {
      session = {
        user: {
          id: (token.user as { id: string }).id,
          firstName: token.firstName as string,
          lastName: token.lastName as string,
          email: token.email as string,
          image: token.image as string,
          role: token.role as string,
          company: token.company as string
        },
        expires: session.expires
      };

      return session;
    }
  },

  pages: {
    signIn: '/entrar'
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
