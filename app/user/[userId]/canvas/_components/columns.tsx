'use client';
import { Prisma } from '@prisma/client';
import { Canvas } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import { ClipboardIcon, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getCanvasList } from '@/lib/queries';
import Link from 'next/link';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export const columns: ColumnDef<
  Prisma.PromiseReturnType<typeof getCanvasList>[number]
>[] = [
  {
    accessorKey: 'id',
    header: 'id',
  },
  {
    accessorKey: 'name',
    header: '名字',
  },
  {
    accessorKey: 'createdAt',
    header: '创建时间',
  },
  {
    accessorKey: 'updatedAt',
    header: '更新时间',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const canvas = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>编辑</DropdownMenuItem>
            <DropdownMenuItem>复制</DropdownMenuItem>
            <DropdownMenuItem onClick={() => {}}>
              <Link
                href={`/canvas/${canvas.id}`}
                className="rounded-md flex items-center gap-2"
              >
                <ClipboardIcon />
                详情
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>删除</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
