import Link from 'next/link'

export default function Navbar() {
  return (
    <navbar>
      <Link href="/">
        <a>Blog</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </navbar>
  );
}
