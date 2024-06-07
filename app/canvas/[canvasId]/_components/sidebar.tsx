'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Components from './components';
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <Sheet open={open} modal={false}>
      <SheetContent className={cn('mt-[77px] w-[333px]')}>
        <Separator className="my-4"></Separator>
        <Tabs defaultValue="component">
          <TabsList className="grid  grid-cols-2">
            <TabsTrigger value="component">组件</TabsTrigger>
            <TabsTrigger value="prop">属性</TabsTrigger>
          </TabsList>
          <TabsContent value="component">
            <Components></Components>
          </TabsContent>
          <TabsContent value="prop"></TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
};
export default Sidebar;
