import GoogleProvider from "next-auth/providers/google";

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  pages: {
    signIn: '/',
    signOut: '/'
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.todos = [{
        id: 5,
        name: 'Heyy',
        desription: '',
        completed: false
      }];
      console.log('From callback', session, token, user);
      return session;
    }
  }
}

export default options;