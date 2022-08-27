import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';
import { textTruncate } from '../theme/styles/helpers';
import _ButtonInput from './ButtonInput';
import _Video from './Video';
import _Warning from './Warning';

const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';
const YOUTUBE_EMBED = 'https://www.youtube.com/embed';
const YOUTUBE_WATCH = 'https://www.youtube.com/watch?v';
const YOUTUBE_SEARCH = 'https://www.youtube.com/results?search_query';
const API_KEY = 'AIzaSyCpjIdSNvjvsfW8kferxS2-ov93DtpD3PU';

const ButtonInput = styled(_ButtonInput)`
  margin: ${({ theme: { spacing } }) => spacing.normal} 0;
`;

const Warning = styled(_Warning)`
  margin-bottom: ${({ theme: { spacing } }) => spacing.normal};
`;

const VideoWrapper = styled.div`
  border: ${({ theme: { border, colors } }) => `${border.size} solid ${colors.borderPrimary}`};
  padding: ${({ theme: { spacing } }) => spacing.normal};

  &:not(:last-child) {
    margin-bottom: ${({ theme: { spacing } }) => spacing.normal};
  }
`;

const VideoItem = styled.div`
  height: 150px;
  margin-bottom: ${({ theme: { spacing } }) => spacing.normal};
`;

const Video = styled(_Video)`
  width: 100%;
`;

const SelectVideo = styled(Button)`
  width: 100%;
`;

const Title = styled.h3`
  ${textTruncate}
  margin: 0 0 ${({ theme: { spacing } }) => spacing.normal};
`;

const SearchSong = ({ disabled, save, setSongUrl }) => {
  const songInputRef = useRef(null);
  const [songName, setSongName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [videoList, setVideoList] = useState([]);

  const createAPIUrl = () => {
    const searchTerm = encodeURIComponent(songName.includes('karaoke') ? songName : `${songName} karaoke`);
    return `${YOUTUBE_API_URL}/search?key=${API_KEY}&part=snippet&limit=10&q=${searchTerm}`;
  };

  const startLoading = () => {
    setLoading(true);
    setMessage(null);
    setVideoList([]);
  };

  const createVideoList = (items) => {
    const videos = items.reduce((acc, item) => {
      if (item.id.kind === 'youtube#video' && item.id.videoId) {
        acc.push({
          id: item.id.videoId,
          url: `${YOUTUBE_WATCH}=${item.id.videoId}`,
          embedUrl: `${YOUTUBE_EMBED}/${item.id.videoId}`,
          title: item?.snippet?.title ? item.snippet.title : 'Karaoke Song',
        });
      }
      return acc;
    }, []);
    if (!videos.length) {
      setMessage('No songs found, try other song name');
    }
    setVideoList(videos);
  };

  const loadVideos = () => {
    startLoading();
    fetch(createAPIUrl())
      .then((res) => res.json())
      .then(({ items }) => createVideoList(items))
      .catch(() => setMessage('Oops :(, something went wrong! Try again!'))
      .finally(() => setLoading(false));
  };

  const handleKeyDown = ({ code }) => {
    if (code === 'Enter' && songName) {
      loadVideos();
    }
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setSongName(value);
    if (value) {
      if (value.startsWith('http')) {
        setSongUrl(value);
      } else {
        setSongUrl(`${YOUTUBE_SEARCH}=${encodeURIComponent(value)}`);
      }
    } else {
      setSongUrl(null);
    }
  };

  useEffect(() => {
    songInputRef?.current.focus();
  }, []);

  return (
    <>
      <ButtonInput>
        <Input
          placeholder="Song name"
          ref={songInputRef}
          value={songName}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={loading || disabled}
        />
        <Button
          icon={loading ? 'loader' : 'search'}
          iconSpin={loading}
          onClick={loadVideos}
          disabled={!songName || loading || disabled}
        />
      </ButtonInput>
      {message ? (
        <Warning>{message}</Warning>
      ) : (
        videoList.map((video) => (
          <VideoWrapper key={video.id}>
            <Title>{video.title}</Title>
            <VideoItem>
              <Video video={video} />
            </VideoItem>
            <SelectVideo text="USE THIS SONG" disabled={disabled} onClick={() => save(video.url)} />
          </VideoWrapper>
        ))
      )}
    </>
  );
};

SearchSong.propTypes = {
  disabled: PropTypes.bool.isRequired,
  save: PropTypes.func.isRequired,
  setSongUrl: PropTypes.func.isRequired,
};

export default SearchSong;
