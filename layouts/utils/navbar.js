import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <span className='navitem'>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </span>
      <span className='navitem'>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </span>
    </nav>
  )
}
