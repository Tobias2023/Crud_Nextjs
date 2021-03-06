/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';

const Nav = () => (
  <header
    sx={{
      height: '80px',
      width: '100vw',
      bg: '#1f4287',
      borderBottom: '1px solid',
      borderColor: '#1f4287',
    }}
  >
    <nav
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        variant: 'containers.page',
        height: '100%',
      }}
    >

      Do a variant theme
      <Link href='/'>
        <a sx={{ color: '#21e6c1', fontWeight: 'bold', fontSize: 4, cursor: 'pointer' }}>
          Ranting randy
        </a>
      </Link>

      <Link href='/post-rant'>
        <a sx={{ color: 'text', fontSize: 3, cursor: 'pointer' }}>Rant</a>
      </Link>

      <Link href='/rant-board'>
        <a sx={{ color: 'text', fontSize: 3, cursor: 'pointer' }}>Rant board</a>
      </Link>
    </nav>
  </header>
);

export default Nav;
