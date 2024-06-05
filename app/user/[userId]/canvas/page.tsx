import { columns } from './_components/columns';
import { DataTable } from './_components/data-table';
import AddDialog from './_components/add-dialog';
import { getCanvasList } from '@/lib/queries';

type Props = {
  params: { userId: string };
};
async function Canvas({ params: { userId } }: Props) {
  const data = await getCanvasList();
  return (
    <div>
      <AddDialog userId={userId}></AddDialog>
      <div className={'mb-4'}></div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default Canvas;
