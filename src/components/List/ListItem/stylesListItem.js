import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "4px 10px 0px 10px",
        backgroundColor: "transparent",
        boxShadow: 'none',
        borderRadius: '0px',
        '&:hover': {
            backgroundColor: '#F1F1F1'
        }
    },
    inputItem: {
        color: "black",
        cursor: "default"
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