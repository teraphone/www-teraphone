import Link from 'next/link';

export type PostProps = {
  title: string;
  body: string;
  id: number;
  userId: number;
}

export default function Post(props: PostProps) {
  const { title, body, id } = props;
  return (
    <article>
      <h2>{title}</h2>
      <p>{body}</p>
      <Link href={`/post/${id}`}>
        <a>Read more...</a>
      </Link>
    </article>
  )
}
