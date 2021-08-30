import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "0px 10px 0px 10px",
        backgroundColor: "transparent",
        boxShadow: 'none',
        borderRadius: '0px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#F1F1F1'
        }
    },
    inputItem: {
        color: "black",
        cursor: 'pointer !important'
    },
    endIcon: {
        width: "18px",
        height: "18px",
        color: "#ddd",
        '&:hover': {
            color: 'gray'
        }
    },
    endIconToggle: {
        width: "18px",
        height: "18px",
        color: "gray"
    }
}))

export default useStyles