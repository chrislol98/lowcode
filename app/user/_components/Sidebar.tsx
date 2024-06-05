import Link from 'next/link';
import {
  Package2,
  Home,
  ShoppingCart,
  Package,
  Users,
  LineChart,
  Bell,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Sidebar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Acme Inc</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="canvas"
              className="flex items-center gap-3 rounded-lg px-3 py-2  text-primary transition-all hover:text-primary"
            >
              <Home className="h-4 w-4" />
              画布
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
