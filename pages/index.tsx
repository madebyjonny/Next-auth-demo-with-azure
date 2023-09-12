import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";

const Home = () => {
  return (
    <div>
      testing
      <img src="/cat.jpg" />
      <button onClick={() => signIn()}>Continue to Okta</button>
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default Home;
