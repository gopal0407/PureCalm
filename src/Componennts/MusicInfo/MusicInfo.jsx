import { Container } from 'react-bootstrap';
import './musicinfo.css';
import PropTypes from 'prop-types';

function MusicInfo({ playlistSrc }) {
  return (
    <div className="spotify-page">
      <Container className="mt-5 pt-5">
        <div className="spotify-playlist">
          <iframe
            title="Spotify Playlist"
            src={playlistSrc}
            width="100%"
            height="352"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: '0px' }}
          ></iframe>
        </div>
      </Container>
    </div>
  )
}

MusicInfo.propTypes = {
  playlistSrc: PropTypes.string.isRequired
};

export default MusicInfo;
