import { cn } from '@/lib/utils';
import Canvas from './_components/canvas';
import Header from './_components/header';
import Sidebar from './_components/sidebar';
const Page = async () => {
  return (
    <div className={cn('h-full bg-background overflow-auto')}>
      <Header />
      <Canvas></Canvas>
      <Sidebar></Sidebar>
    </div>
  );
};
export default Page;
