'use client';
import { cn } from '@/lib/utils';
import { ComponentType } from '@/components/canvas/types';

type Props = { component: ComponentType };

export interface BreakpointType {
  type: 'breakpoint';
  deviceType: 'Desktop' | 'Mobile' | 'Tablet' | 'Custom';
}

const Breakpoint = ({ component }: Props) => {
  const { styles } = component;

  return (
    <div style={styles} className={cn()}>
      Breakpoint
    </div>
  );
};

export const BreakpointDrag = () => {

  const handleDragStart = (
    e: React.DragEvent,
    type: BreakpointType['type']
  ) => {
    e.dataTransfer.setData('type', type);
  };
  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, 'breakpoint')}

    >
      BreakPoint
    </div>
  );
};
export default Breakpoint;
