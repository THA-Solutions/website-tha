import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { User } from '@tha-solutions';
import { AuthorizationService } from '@tha-solutions';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials: any): Promise<User | null> {
        try {
          if (credentials?.email && credentials?.password) {
            const user = await AuthorizationService.signIn({
              email: credentials.email,
              password: credentials.password
            });

            if (user) {
              return user;
            }
          }

          return null;
        } catch (error: any) {
          console.error('Error during sign-in:', error.response.data.message);
          throw new Error(error.response.data.message);
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
    jwt: async ({ token, trigger, session, user }) => {
      if (trigger === 'update') {
        return { ...token, ...session.user };
      }

      if (user) {
        token.id = user.id;
        token.firstName = (user as User).firstName;
        token.lastName = (user as User).lastName;
        token.email = user.email;
        token.image = user.image;
        token.role = (user as User).role;
        token.company = (user as User).company;
      }

      return { ...token, ...user };
    },

    session: async ({ session, token }) => {
      session = {
        user: {
          id: token.sub || (token.user as { id: string }).id,
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
    signIn: '/entrar',
    signOut: '/entrar'
  }
};
