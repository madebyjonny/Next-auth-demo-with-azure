import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";

const Home = (props: { user: string }) => {
  return (
    <div>
      dashboard {props.user}
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session?.user?.email,
    },
  };
}

export default Home;
