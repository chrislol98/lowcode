import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { Canvas } from '@prisma/client';
import { getCanvas } from '@/lib/queries';
type DeviceTypes = 'Desktop' | 'Mobile' | 'Tablet' | 'custom';
type CanvasType = Omit<Canvas, 'components'> & {
  components: ElementType[];
};
type ElementType = {
  id: string;
  styles: React.CSSProperties;
  children?: ElementType[];
};
type State = Partial<CanvasType>;

type Actions = {
  getCanvas: (canvasId: string) => Promise<void>;
};

export const useCanvasStore = create<State & Actions>()(
  immer((set) => ({
    getCanvas: async (canvasId: string) => {
      const data = await getCanvas(canvasId);
      set(() => ({
        ...data,
      }));
    },
  }))
);
