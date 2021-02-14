import React from 'react';
import MemeCard from './MemeCard';
import MemeModal from './MemeModal';
import {QUERIES} from '../util/data'
import Columns from 'react-columns';
import {Container, Row} from 'react-bootstrap';

const MemeList = ({memes, size}) => {
  const [selectedMeme, setSelectedMeme] = React.useState(null);

  return (
    <Container className="memelist">
      <Columns queries={QUERIES}>
        {memes.map(meme =>{ return (
          <MemeCard
          key={meme.id}
          image={meme.url}
          stars={meme.stars}
          comments={meme.comments}
          onClick={() => setSelectedMeme(meme)}
          size={size}
          />
          )})
        }
      </Columns>
      <MemeModal
        meme={selectedMeme}
        show={selectedMeme != null}
        onHide={() => setSelectedMeme(null)}
      />
    </Container>
  )
}

export default MemeList
