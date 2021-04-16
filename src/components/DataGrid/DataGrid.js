import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import DeleteIcon from "@material-ui/icons/Delete";
const DataGrid = (props) => {
  let columns = props.cols.map((key, id) => {
    return {
      Header: key.title,
      accessor: key.field,
    };
  });
  columns.push({
    Header: "Action",
    show: props.canDelete,
    Cell: (row) => (
      <div>
        <DeleteIcon
          color="secondary"
          onClick={(console.log(row), () => props.rowDelete(row.index))}
          style={{ cusror: "pointer" }}
        />
      </div>
    ),
  });
  return (
    <div>
      <ReactTable
        data={props.datasource}
        columns={columns}
        defaultSorted={[
          {
            id: props.sortKey,
            desc: false,
          },
        ]}
        pageSize={props.PageSize}
      />
      <br />
    </div>
  );
};

export default DataGrid;
