import { cn } from '@/lib/utils';

const Canvas: React.FC<{}> = async () => {
  return (
    <div
      style={{ height: 'calc(100% - 77px)', width: 'calc(100% - 333px)' }}
      className={cn(' bg-green-300')}
    ></div>
  );
};
export default Canvas;
