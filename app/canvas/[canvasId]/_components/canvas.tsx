'use client';
import { cn } from '@/lib/utils';
import { useCanvasStore } from '@/stores/canvas-store';
const Canvas: React.FC<{}> = () => {
  // const text = useCanvasStore((state) => state.text);
  return (
    <div
      style={{ height: 'calc(100% - 77px)', width: 'calc(100% - 333px)' }}
      className={cn(' bg-green-300')}
    ></div>
  );
};
export default Canvas;
