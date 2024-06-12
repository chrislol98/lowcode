'use client';
import { cn } from '@/lib/utils';
import React from 'react';
import { type ComponentType } from '@/components/canvas/types';

import { v4 } from 'uuid';
import { type CanvasType, useCanvasStore } from '@/stores/canvas-store';
import CanvasComponent from '@/components/canvas';
type Props = { components: CanvasType['components'] };
const Canvas = ({ components }: Props) => {
  const { addComponent } = useCanvasStore();
  const handleOnDrop = (e: React.DragEvent) => {
    const type = e.dataTransfer.getData('type') as ComponentType['type'];
    switch (type) {
      case 'breakpoint':
        addComponent({
          id: v4(),
          deviceType: 'Desktop',
          type: 'breakpoint',
          styles: {
            width: '20px',
            height: '20px',
            background: 'green',
          },
        });
        break;
    }
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  return (
    <div
      style={{ height: 'calc(100% - 77px)', width: 'calc(100% - 333px)' }}
      className={cn(' bg-green-300')}
      draggable
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
    >
      {components.map((component, idx) => {
        return (
          <CanvasComponent key={idx} component={component}></CanvasComponent>
        );
      })}
    </div>
  );
};
export default Canvas;
