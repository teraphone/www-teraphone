import Head from 'next/head';
import { GetStaticProps } from 'next';
import Post, { PostProps } from '../components/post';

export const getStaticProps: GetStaticProps = async (context) => {
  // fetch list of posts
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_page=1'
  )
  const postList = await response.json()
  return {
    props: {
      postList,
    },
  }
}

export default function IndexPage(props: { postList: PostProps[] }) {
  const { postList } = props
  return (
    <main>
      <Head>
        <title>Home page</title>
      </Head>

      <h1>List of posts</h1>

      <section>
        {postList.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </section>
    </main>
  )
}
