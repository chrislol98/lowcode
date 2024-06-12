import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { Canvas } from '@prisma/client';
import { getCanvas } from '@/lib/queries';
import { ComponentType } from '@/components/canvas/types';
// 所有跟组件有关的处理逻辑全部写到这里面

// components
export type CanvasType = Omit<Canvas, 'components'> & {
  components: ComponentType[];
};

// zustand

type State = Partial<CanvasType>;

type Actions = {
  getCanvas: (canvasId: string) => Promise<void>;
  addComponent: (component: ComponentType) => void;
};

export const useCanvasStore = create<State & Actions>()(
  immer((set) => ({
    getCanvas: async (canvasId: string) => {
      const data = await getCanvas(canvasId);
      data &&
        data.components &&
        (data.components = JSON.parse(data.components));
      set(() => ({
        ...data,
      }));
    },
    addComponent: (component: ComponentType) => {
      set((state) => {
        if (!state.components) state.components = [];
        state.components.push(component);
      });
    },
  }))
);
