import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
  }
  interface Session {
    id: string;
  }

  interface JWT {
    id: string;
  }
  interface Profile {
    id: string;
    login?: string;
    bio?: string;
  }
}

// types/next-auth.d.ts
// import NextAuth from "next-auth";

// declare module "next-auth" {
//   interface User {
//     id: string;
//   }

//   interface Session {
//     user: User;
//   }
// }
