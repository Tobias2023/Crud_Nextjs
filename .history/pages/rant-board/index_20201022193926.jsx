// pages/notes/index.jsx
/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';
import rants from '../../src/components/data/data'

export default ({ rants }) => {
  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>Rant board</h1>

      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {Rants.map((rant) => (
          <div sx={{ width: '33%', p: 2 }}>
            <Link key={rant.id} href='/rant-board/[id]' as={`/rant-board/${rant.id}`}>
              <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div sx={{ variant: 'containers.card' }}>
                  <strong>{rant.description}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};