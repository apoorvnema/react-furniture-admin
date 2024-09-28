import {Button} from '@mui/material';

function CustomButton() {
    return (
        <Button
            type="submit"
            variant="contained"
            color="info"
            size="small"
            disableElevation
            fullWidth
            sx={{ my: 2 }}
        >
            Sign In
        </Button>
    );
}

export default CustomButton;