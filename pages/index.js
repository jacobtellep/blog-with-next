import Head from 'next/head';

import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = (props) => {
  // comment to update main
  return (
    <>
      <Head>
        <title>{`Shlump's Blog`}</title>
        <meta
          name='description'
          content='I post about programming and web development'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800, // might wanna use this for api calls for the stock app
  };
};

export default HomePage;

// 1) Hero => Present Ourselves
// 2) Featured Posts
