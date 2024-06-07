import { Canvas } from '@prisma/client';
type DeviceTypes = 'Desktop' | 'Mobile' | 'Tablet' | 'custom';

type CanvasType = Omit<Canvas, 'components' | 'createdAt' | 'updatedAt'> & {
  components: ElementType[] | Canvas['components'];
} & { deviceType: DeviceTypes };

type ElementType = {
  id: string;
  styles: React.CSSProperties;
  children: ElementType[];
};

const initialCanvasState: CanvasType = {
  id: '',
  name: '',
  userId: '',
  components: [],
  deviceType: 'Desktop',
};

const initialState = {
  canvas: initialCanvasState,
};

