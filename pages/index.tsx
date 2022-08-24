import { GetServerSideProps } from 'next';
import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';
import { wrapper } from '../redux/store';
import { parseCookies } from 'nookies';
import { UserApi } from '../services/api';
import { setUserData } from '../redux/slices/userSlice';

export default function Home() {
  return (
    <MainLayout>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const { authToken } = parseCookies(ctx);

  try {
    const userData = await UserApi.getMe(authToken);

    store.dispatch(setUserData(userData));
    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
  return { props: {} };
});
