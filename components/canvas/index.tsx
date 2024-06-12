import { type ComponentType } from '@/components/canvas/types';
import Container from './container';
import Breakpoint from './breakpoint';
type Props = { component: ComponentType };
const CanvasComponent = ({ component }: Props) => {
  switch (component.type) {
    case 'breakpoint':
      return <Breakpoint component={component}></Breakpoint>;
    default:
      return null;
  }
};

export default CanvasComponent