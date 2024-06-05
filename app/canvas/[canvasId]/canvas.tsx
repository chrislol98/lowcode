import { cn } from '@/lib/utils';

const Canvas: React.FC<{}> = async () => {
  return (
    <div
      className={cn('flex flex-col flex-[3_3_0%] overflow-auto bg-green-100 ')}
    >
      <div className="flex-1">
        <div className="h-[10010px] w-[11120px]  bg-red-500"></div>
      </div>
    </div>
  );
};
export default Canvas;
