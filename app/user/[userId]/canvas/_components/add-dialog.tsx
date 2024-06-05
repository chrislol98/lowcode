'use client';
import { Button } from '@/components/ui/button';
import Loading from '@/components/loading';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { upsertCanvas } from '@/lib/queries';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Canvas } from '@prisma/client';
import { useRouter } from 'next/navigation';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
interface AddDialogProps {
  defaultData?: Canvas;
  userId: string;
}
const formSchema = z.object({
  name: z.string(),
});

const AddDialog: React.FC<AddDialogProps> = function ({ defaultData, userId }) {
  const form = useForm<z.infer<typeof formSchema>>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });
  const isLoading = form.formState.isLoading;
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await upsertCanvas(userId, { ...values }, defaultData?.id);
    if (response) {
      toast({
        variant: 'default',
        title: '操作成功',
      });
    } else {
      toast({
        variant: 'destructive',
        title: '操作失败',
      });
    }
    setOpen(false);
    router.refresh();
  };

  useEffect(() => {
    if (defaultData) {
      form.reset({});
    }
  }, [defaultData, form]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>创建画布</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>创建画布</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              disabled={isLoading}
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className={'grid grid-cols-4 items-center gap-4'}>
                  <FormLabel className="text-right">画布名字</FormLabel>
                  <FormControl className="col-span-3">
                    <Input placeholder="name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button disabled={isLoading} type="submit">
                {form.formState.isSubmitting ? <Loading /> : '保存'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddDialog;
