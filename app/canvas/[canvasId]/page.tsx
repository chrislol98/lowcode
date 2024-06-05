import { cn } from '@/lib/utils';
import Canvas from './canvas';
import Header from './header';
import Sidebar from './sidebar';
const Page = async () => {
  return (
    <div className={cn('h-full flex flex-col')}>
      <Header />
      <div className={cn('flex flex-1')}>
        <Canvas></Canvas>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};
export default Page;
