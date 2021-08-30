import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    menuBtn: {
        margin: "10px",
        textTransform: "unset !important",
        fontSize: "large",
        fontWeight: "500",
        color: "#5F6368"
    },
    menuPaper: {
        width: "300px",
        padding: "8px 0px 8px 0px",
        marginBottom: "10px",
        borderRadius: "9px",
    },
    menuItem: {
        display: "flex",
        justifyContent: "space-between",
        overflow: "visible"
    },
    menuIcon: {
        width: "18px",
        height: "18px",
        color: "#ddd",
        '&:hover': {
            color: 'gray'
        }
    },
    menuCreateBtn: {
        height: "55px",
        borderTop: "1px solid rgba(0,0,0,0.12)",
        zIndex: '1'
    },
    inputPaper: {
        margin: "10px",
        padding: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-between",
        borderRadius: "9px",
        backgroundColor: "#dadce0"
    },
    inputBase: {
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

export default  useStyles