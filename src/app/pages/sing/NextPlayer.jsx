import Subtitle from '../../components/typography/Subtitle';
import { randomNumber } from '../../helpers/generators';
import ActivePlayer from './ActivePlayer';

const NextPlayer = () => {
  const randomPhrases = [
    'Amazing performance ',
    'Awesome performance ',
    'Astounding performance ',
    'Breathtaking performance ',
    'Extraordinary performance ',
    'Jaw-dropping performance ',
    'Phenomenal performance ',
    'Spectacular performance ',
    'Stunning performance ',
    'Unbelievable performance ',
  ];
  const randomPhraseIndex = randomNumber(0, randomPhrases.length - 1);

  return (
    <Subtitle>
      {randomPhrases[randomPhraseIndex]} <ActivePlayer />!
    </Subtitle>
  );
};

export default NextPlayer;
