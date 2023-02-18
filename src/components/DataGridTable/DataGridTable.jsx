import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SaveIcon from "@mui/icons-material/Save";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import columns from "./columns";
import { useGetDataQuery } from "@/features/DataGrid/dataSlice";
import { CircularProgress } from "@mui/material";
import { useDeleteOneRecordMutation } from "@/features/MainTable/mainTableSlice";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSnackbar } from "notistack";

export default function DataGridTable() {
  const [deleteId, setDeleteId] = useState(null);
  const { data: rows, isLoading, isError, error } = useGetDataQuery();
  const [deleteOne, {}] = useDeleteOneRecordMutation();
  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = async () => {
    if (deleteId) {
      const result = await deleteOne(deleteId);
      setDeleteId(null);
      console.log("Handle Delete ", result);
      if (result.error)
        enqueueSnackbar(result.error.data?.message + "-- Item wasn't deleted", {
          variant: "error",
        });
      else
        enqueueSnackbar(`Item ${deleteId} -- successfully deleted!`, {
          variant: "success",
        });
    }
  };

  const columnsAll = [
    ...columns,
    {
      field: "actions",
      headerName: "Actions",
      editable: null,
      renderCell: (params) => {
        // console.log("Randre Actions ", params);
        return (
          <>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              {/* <input hidden accept="image/*" type="file" /> */}
              <SaveIcon />
            </IconButton>
            <IconButton
              color="secondary"
              aria-label="upload picture"
              component="label"
              onClick={() => setDeleteId(params.id)}
            >
              {/* <input hidden accept="image/*" type="file" /> */}
              <DeleteForeverIcon />
            </IconButton>
          </>
        );
      },
    },
  ];
  if (isLoading) return <CircularProgress />;
  if (isError) return <p>Ops. something went wrong</p>;
  return (
    <Box sx={{ height: 800, width: "100%" }}>
      <Dialog
        open={!!deleteId}
        onClose={() => setDeleteId(null)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Would you like permanently delete this item ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Item will be permanently deleted from database and no future access
            will be availabe
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteId(null)}>Disagree</Button>
          <Button onClick={handleDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <DataGrid
        components={{ Toolbar: GridToolbar }}
        loading={isLoading}
        rows={rows}
        columns={columnsAll}
        autoPageSize
        rowHeight={60}
        getRowId={(v) => v._id}
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
