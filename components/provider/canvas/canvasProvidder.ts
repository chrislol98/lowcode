type DeviceTypes = 'Desktop' | 'Mobile' | 'Tablet' | 'custom';

type Canvas = {
  id: number;
  component: Component[];
  device: DeviceTypes;
};

type Component = {};
