import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React Framework for production. It makes building fullstack React apps and sites a breeze and ships with built-in server-side rendering.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React Framework for production. It makes building fullstack React apps and sites a breeze and ships with built-in server-side rendering.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React Framework for production. It makes building fullstack React apps and sites a breeze and ships with built-in server-side rendering.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React Framework for production. It makes building fullstack React apps and sites a breeze and ships with built-in server-side rendering.',
    date: '2022-02-10',
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
