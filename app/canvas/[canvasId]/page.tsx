'use client';
import { cn } from '@/lib/utils';
import Canvas from './_components/canvas';
import Header from './_components/header';
import Sidebar from './_components/sidebar';
import { useCanvasStore } from '@/stores/canvas-store';
import { useEffect } from 'react';

type Props = {
  params: {
    canvasId: string;
  };
};
const Page = ({ params: { canvasId } }: Props) => {
  const { getCanvas, components } = useCanvasStore();

  useEffect(() => {
    getCanvas(canvasId);
  }, [getCanvas, canvasId]);

  return (
    <div className={cn('h-full bg-background overflow-auto')}>
      <Header />
      <Canvas components={components ?? []}></Canvas>
      <Sidebar></Sidebar>
    </div>
  );
};
export default Page;
