import type { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { User } from '@tha-solutions';

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
          email: (token.user as User).email,
          firstName: (token.user as User).firstName,
          lastName: (token.user as User).lastName,
          image: (token.user as User).imageUrl as string,
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

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
