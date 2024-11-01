import { DDayPop } from './components/home/greeting/DDayPop';
import { Interview } from './components/home/greeting/Interview';
import { PictureSlider } from './components/home/greeting/PictureSlider';

export function Greeting() {
  return (
    <div className="w-full relative">
      <PictureSlider />
      <Interview />
      <DDayPop />
    </div>
  );
}
