import { type ContainerType } from './container';
import { type BreakpointType } from './breakpoint';

export type ComponentType = {
  id: string;
  styles: React.CSSProperties;
  children?: ComponentType[];
} & (ContainerType | BreakpointType);
