import { DataGridPro } from "@mui/x-data-grid-pro";
import {
  GridColumnVisibilityModel,
  GridFilterModel,
  GridToolbar,
} from "@mui/x-data-grid";
import React, { useEffect } from "react";

type GridDataProps = {
  rows: any;
  columns: any;
  hideColumns?: any;
};

const GridData: React.FC<GridDataProps> = ({
  rows,
  columns,
  hideColumns = {},
  // onAddClick = () => {},
}) => {
  const [columnVisibilityModel, setColumnVisibilityModel] =
    React.useState<GridColumnVisibilityModel>(hideColumns);
  const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
    items: [],
  });

  // useEffect(() => {
  //   const fd = sessionStorage.getItem("filterData");
  //   const sdparse = JSON.parse(fd);
  //   if (sdparse?.items?.length > 0) {
  //     const jp = sdparse?.items;
  //     setFilterModel({ items: jp });
  //     // handelFilter({ items: jp });
  //   }
  // }, []);

  // const handelFilter = (newFilterModel, data) => {
  //   if (data.reason) {
  //     setFilterModel(newFilterModel);
  //     sessionStorage.setItem("filterData", JSON.stringify(newFilterModel));
  //   }
  // };

  return (
    <DataGridPro
      style={{ marginTop: "15px" }}
      rows={rows}
      columns={columns}
      density="compact"
      slots={{ toolbar: GridToolbar }}
      autoHeight
      columnVisibilityModel={columnVisibilityModel}
      onColumnVisibilityModelChange={(newModel) =>
        setColumnVisibilityModel(newModel)
      }
      getRowId={(row) => row.Id}
      pagination
      // filterModel={filterModel}
      // onFilterModelChange={(event, data) => handelFilter(event, data)}
      initialState={{
        ...rows.initialState,
        pagination: { paginationModel: { pageSize: 10 } },
      }}
      pageSizeOptions={[10, 30, 50]}
    />
  );
};

export default GridData;
