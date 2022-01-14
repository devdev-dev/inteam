import { GetServerSidePropsResult } from "next";
import supabase, { Profile } from "supabase";

export interface AgityAppServerSideProps {
  profile: Profile;
}

export const initAppProps = async (
  context
): Promise<GetServerSidePropsResult<AgityAppServerSideProps>> => {
  const authResult = await supabase.auth.api.getUserByCookie(context.req);
  if (!authResult || !authResult.user || authResult.error) {
    console.log(
      "Authorization error or no auth user redirecting to login page",
      authResult.error
    );
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      },
    };
  } else {
    const profile = await supabase
      .from("profiles")
      .select("id, username, displayname")
      .match({ id: authResult.user.id });

    return {
      props: {
        profile: {
          username: profile.data[0].username,
          displayname: profile.data[0].displayname,
        },
      },
    };
  }
};
