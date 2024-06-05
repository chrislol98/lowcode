import { redirect } from 'next/navigation';
import { getUser } from '@/lib/queries';
const Page = async () => {
  const user = await getUser();
  if (!user) return redirect('/sign-in');
  redirect(`/user/${user.id}/canvas`);
  return null;
};

export default Page;
