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
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

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
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="component">组件</TabsTrigger>
            <TabsTrigger value="prop">属性</TabsTrigger>
          </TabsList>
          <TabsContent value="component">
            <Card>
              <CardContent>
                <div>12</div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="prop">
            <Card>
              <CardContent></CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
};
export default Sidebar;
