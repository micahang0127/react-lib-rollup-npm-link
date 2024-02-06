import Pagination from '@mui/material/Pagination';

export default function TablePaginationMuiOffCp({
  defualtPage,
  onChange,
  totalCount,
  totalPage,
  size,
  page,
  dataCount,
}) {
  return (
    <>
      <RecordsOffCp size={size} page={page} count={dataCount} totalCount={totalCount} />
      <Pagination count={totalPage} defaultPage={defualtPage} siblingCount={2} onChange={onChange} />
    </>
  );
}
export function RecordsOffCp({ size, page, count, totalCount }) {
  // [TODO]
  console.log('[Rendering]::RecordsOffCp');
  const record = size * page;
  return (
    <p className="records_text">
      Records :
      <span>
        {record + 1}-{count == size ? record + size : record + count} of {totalCount}
      </span>
    </p>
  );
}
