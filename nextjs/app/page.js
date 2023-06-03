import Image from 'next/image';
import Button from './components/Button';

export default function Home() {
  return (
    <div className="flex justify-center h-screen space-x-3 items-center">
      <Button name={'home'} bgcolor={'green'} />
      <Button name={'about'} bgcolor={'brown'} />
      <Button name={'contact'} bgcolor={'orange'} />
      <Button name={'feedback'} bgcolor={'purple'} />
    </div>
  );
}
