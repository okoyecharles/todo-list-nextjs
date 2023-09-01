import GoogleProvider from "next-auth/providers/google";

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/",
    signOut: "/",
  },
  callbacks: {
    async session({ session, token }) {
      const { name, email, picture: image, sub: id } = token;

      const res = await fetch(`${process.env.BACKEND_URL}/auth/signin`, {
        body: JSON.stringify({ id, name, email, image }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { user } = await res.json();
      return { user, expires: session.expires };
    },
  },
};

export default options;
