import { Typography } from "@mui/material"

const { default: AppContainer } = require("@/components/AppContainer/ApplicationContainer")

const AddPalletPage = () => {
    const initialState = { productId: '', description: '', SAPcode: '', location: '', type: '', quantity: 0, size: { width: 0, heigth: 0, length: 0 } }


    return (
        <AppContainer>
            <Typography>Loolka</Typography>
        </AppContainer>)
}
export default AddPalletPage
