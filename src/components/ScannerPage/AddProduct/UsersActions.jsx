import { Check, Save, Delete } from "@mui/icons-material";
import { blue, red } from "@mui/material/colors";
import { useState } from "react";
import { useSnackbar } from "notistack";

import { Box, Fab, CircularProgress } from "@mui/material";
import {
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "@/features/Product/productSlice";

const UsersActions = ({ params, rowId, setRowId }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [deleteProduct, {}] = useDeleteProductMutation();
  const [updateProduct, {}] = useUpdateProductMutation();

  const handleSave = async () => {
    const response = await updateProduct({ id: params.id, data: params.row });
    console.log("Response from saving ", response.data.status);
    if (response.data?.status === "ok") {
      enqueueSnackbar(`Product ${params.id} successfully updated`, {
        variant: "success",
      });
      setRowId(null);
    } else {
      enqueueSnackbar(`wasn't able to update ${params.id} try again later`, {
        variant: "error",
      });
    }
  };
  const handleDelete = async () => {
    const response = await deleteProduct(params.id);
    console.log("Handle Delete : ", response);
    enqueueSnackbar(`Item with ID: ${params.id} successfully deleted`, {
      variant: "success",
    });
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
          onClick={handleSave}
          color="primary"
          sx={{
            width: 40,
            height: 40,
            bgcolor: blue[500],
            "&:hover": { bgcolor: blue[700] },
          }}
          disabled={params.id !== rowId || loading}
        >
          <Save />
        </Fab>
      )}
      {loading && (
        <CircularProgress
          size="52"
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
          m: 2,
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
