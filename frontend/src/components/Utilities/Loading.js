import CircularProgress from "@material-ui/core/CircularProgress";
import { Box } from "@material-ui/core";

const Loading = () => {

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            margin: "12vh 25vw",
        }}>
            <CircularProgress color="secondary" />
        </Box>
    );
};

export default Loading