import { useSnackbar } from "notistack";
import Backdrop from "@mui/material/Backdrop";
import { useEffect } from "react";


const ErrorHandler = ({msg}) => {
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
        enqueueSnackbar(msg, {variant: 'error'})
    }, [msg])
    return  null
    
//     <Backdrop
//     sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
//     open={true}
//   ></Backdrop>
}
 
export default ErrorHandler;