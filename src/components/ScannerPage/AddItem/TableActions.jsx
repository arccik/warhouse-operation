import { Check, Save, Delete } from "@mui/icons-material";
import { blue, red } from "@mui/material/colors";
import { useState } from "react";
import { useSnackbar } from "notistack";

import { Box, Fab, CircularProgress } from "@mui/material";
import {
  useUpdateItemMutation,
  useDeleteItemMutation,
} from "@/features/Item/itemSlice";

const UsersActions = ({ params, rowId, setRowId }) => {
  const [deleteItem, {}] = useDeleteItemMutation();
  const [updateItem, {}] = useUpdateItemMutation();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    const response = await updateItem(params.row);
    if (!response.error) {
      setLoading(false);
      setSuccess(true);
      setRowId(null);
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
    } else {
      enqueueSnackbar("Something went wrong. Try Again", { variant: "error" });
      setLoading(false);
    }
  };

  const handleDelete = async (event) => {
    const response = await deleteItem(params.id);
    if (response?.error?.data) {
      return enqueueSnackbar(response.error.data.message, { variant: "error" });
    }
  };
  return (
    <Box
      sx={{
        m: 1,
        position: "relative",
      }}
    >
      {success ? (
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
            bgcolor: blue[500],
            "&:hover": { bgcolor: blue[700] },
          }}
        >
          <Check />
        </Fab>
      ) : (
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
            bgcolor: blue[500],
            "&:hover": { bgcolor: blue[700] },
          }}
          disabled={params.id !== rowId || loading}
          onClick={handleSave}
        >
          <Save />
        </Fab>
      )}
      {loading && (
        <CircularProgress
          size={50}
          sx={{
            color: blue[200],
            position: "absolute",
            top: -6,
            left: -6,
            zIndex: 1,
          }}
        />
      )}
      <Fab
        onClick={handleDelete}
        color="primary"
        sx={{
          width: 40,
          height: 40,
          ml: 2,
          bgcolor: red[500],
          "&:hover": { bgcolor: red[700] },
        }}
      >
        <Delete />
      </Fab>
    </Box>
  );
};
export default UsersActions;
