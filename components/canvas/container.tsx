'use client';
import { cn } from '@/lib/utils';
import { ComponentType } from '@/components/canvas/types';

type Props = { component: ComponentType };

export interface ContainerType {
  type: 'container';
}
const Container = ({ component }: Props) => {
  const { styles } = component;

  return (
    <div style={styles} className={cn()}>
      container
    </div>
  );
};

export default Container;
