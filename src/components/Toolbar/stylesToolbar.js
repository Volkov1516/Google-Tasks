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
    menuTitle: {
        width: "200px"
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
    submenuPaper: {
        width: '100px',
        position: "relative",
        top: "50px",
        right: "0px",
        zIndex: '2'
    }
}))

export default  useStyles