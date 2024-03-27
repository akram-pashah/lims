import { GridColumnVisibilityModel, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import MuiModules from "../../MUI-Module/MuiImports";

type SubGridProps = {
  height: any,
  width: any,
  label: any,
  rows: any,
  columns: any,
  hideColumns: any
};

const SubGrid: React.FC<SubGridProps> = ({ height, width, label, rows, columns, hideColumns = {} }) => {
  const [columnVisibilityModel, setColumnVisibilityModel] =
    React.useState<GridColumnVisibilityModel>(hideColumns);
  return (
    <div>
      <MuiModules.UIBox sx={{ width }}>
        <br />
        <MuiModules.DataGridPro
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
          initialState={{
            ...rows.initialState,
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 30, 50]}
        />
      </MuiModules.UIBox>
    </div>
  );
};

export default SubGrid;
