import { useSound } from '../context/SoundContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
} from '@fortawesome/fontawesome-svg-core/import.macro';

export default function RainSound() {
  const { rain, setRain, setSrc } = useSound();

  //Setsplaying state to true through HELPER FUNCTION in SoundContext.js
  const playSound = () => {
    setRain(true);
    setSrc('http://localhost:8080/public/Rain.mp3');
  };

  const pauseSound = () => {
    setRain(false);
  };

  return (
    <section className="flex flex-row justify-around items-center">
      <div>
        <h1 className="font-body text-2xl text-center">Rainy</h1>
      </div>
      <div>
        {rain ? (
          <button onClick={pauseSound} className="align-middle">
            <FontAwesomeIcon icon={solid('circle-pause')} className="h-5" />
          </button>
        ) : (
          <button onClick={playSound} className="align-middle">
            <FontAwesomeIcon icon={solid('circle-play')} className="h-5" />
          </button>
        )}
      </div>
    </section>
  );
}
