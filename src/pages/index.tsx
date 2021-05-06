import Link from 'next/link';

const IndexPage = () => {
  return (
    <main>
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </main>
  );
};

export default IndexPage;
