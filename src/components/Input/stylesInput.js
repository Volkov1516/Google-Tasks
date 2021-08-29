import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    inputPaper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-between",
        borderRadius: "9px"
    },
    inputBase: {
        marginLeft: "15px"
    },
    inputBtn: {
        marginRight: "15px",
        fontSize: "16px",
        color: '#1A73E8',
        backgroundColor: "transparent",
        borderRadius: "9px",
        '&:hover': {
            color: 'white',
            backgroundColor: "#1A73E8"
        }
    }
}))

export default useStyles