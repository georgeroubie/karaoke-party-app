import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';
import { textTruncate } from '../theme/styles/helpers';
import ButtonInput from './ButtonInput';
import _Video from './Video';
import Warning from './Warning';

const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';
const YOUTUBE_EMBED = 'https://www.youtube.com/embed';
const YOUTUBE_WATCH = 'https://www.youtube.com/watch?v';
const API_KEY = 'AIzaSyCpjIdSNvjvsfW8kferxS2-ov93DtpD3PU';

const VideoWrapper = styled.div`
  border: 1px solid ${({ theme: { colors } }) => colors.borderPrimary};
  padding: ${({ theme: { spacing } }) => spacing.normal};

  &:not(:last-child) {
    margin-bottom: ${({ theme: { spacing } }) => spacing.normal};
  }
`;

const VideoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 150px;
`;

const Video = styled(_Video)`
  width: 100%;
`;

const SelectVideo = styled(Button)`
  height: 100%;
  flex-shrink: 0;
`;

const Title = styled.h3`
  ${textTruncate}
  font-size: 1.2rem;
  line-height: 1.7rem;
  margin: 0 0 ${({ theme: { spacing } }) => spacing.small};
`;

const SearchSong = ({ updateSongUrl }) => {
  const songInputRef = useRef(null);
  const [songName, setSongName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [videoList, setVideoList] = useState([]);

  const createAPIUrl = () => {
    const searchTerm = encodeURIComponent(songName.includes('karaoke') ? songName : `${songName} karaoke`);
    return `${YOUTUBE_API_URL}/search?key=${API_KEY}&part=snippet&limit=3&q=${searchTerm}`;
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
          onChange={({ target }) => setSongName(target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />
        <Button
          icon={loading ? 'loader' : 'search'}
          iconSpin={loading}
          onClick={loadVideos}
          disabled={!songName || loading}
        />
        <Button icon="cancel" onClick={() => updateSongUrl()} disabled={loading} />
      </ButtonInput>
      {message && <Warning>{message}</Warning>}
      {!message &&
        videoList.map((video) => (
          <VideoWrapper key={video.id}>
            <Title>{video.title}</Title>
            <VideoItem>
              <Video video={video} />
              <SelectVideo icon="check" onClick={() => updateSongUrl(video.url)} />
            </VideoItem>
          </VideoWrapper>
        ))}
    </>
  );
};

export default SearchSong;
