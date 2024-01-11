import { GetStaticProps, NextPage } from "next";
import { Layout } from "@/components/Layout/Layout";
import { initStore } from "@/store/store";
import {
  useFetchNowPlayingQuery,
  useFetchPopularQuery,
  useFetchTopRatedQuery,
  useFetchUpComingQuery,
} from "@/api/filmSphereApi";

const Index: NextPage = () => {
  const { data } = useFetchUpComingQuery(1);
  console.log(data);

  return (
    <Layout>
      <div>Herp section</div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const store = initStore();
  const state = store.getState();

  return { props: { initialReduxState: store.getState() } };
};

export default Index;
