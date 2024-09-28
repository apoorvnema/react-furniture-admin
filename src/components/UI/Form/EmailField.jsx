import {InputAdornment, TextField} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

function CustomEmailField() {
    return (
        <TextField
            id="input-with-icon-textfield"
            label="Username"
            name="email"
            type="email"
            size="small"
            required
            fullWidth
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle fontSize="inherit" />
                        </InputAdornment>
                    ),
                },
            }}
            variant="outlined"
        />
    );
}

export default CustomEmailField;