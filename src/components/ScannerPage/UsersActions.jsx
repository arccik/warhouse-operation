import { Check, Save } from "@mui/icons-material";
import { blue } from "@mui/material/colors";
import { useState } from "react";

const { Box, Fab, CircularProgress } = require("@mui/material");

const UsersActions = ({ params, rowId, setRowId }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSave = () => {};
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
          onChange={handleSave}
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
    </Box>
  );
};
export default UsersActions;
