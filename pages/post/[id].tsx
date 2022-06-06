import Link from 'next/link';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { PostProps } from '../../components/post';

export async function getStaticPaths() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_page=1'
  );
  const postList = await response.json();
  return {
    paths: postList.map((post: PostProps) => {
      return {
        params: {
          id: `${post.id}`,
        },
      };
    }),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  // fetch single post detail
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params?.id}`
  );
  const post = await response.json();
  return {
    props: post,
  };
};

export default function Post(props: PostProps) {
  const { title, body } = props;
  return (
    <main>
      <Head>
        <title>{title}</title>
      </Head>

      <h1>{title}</h1>

      <p>{body}</p>

      <Link href="/">
        <a>Go back to home</a>
      </Link>
    </main>
  );
}
