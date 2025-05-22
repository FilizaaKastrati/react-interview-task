import { Box, Paper, styled } from "@mui/material"
import type { StatusType } from "../../constants/status"

export const Container = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    gap: theme.spacing(1),
}))

export const Card = styled(Paper, {
    shouldForwardProp: (prop) => prop !== "statusType",
})<{ statusType: StatusType }>(({ theme, statusType }) => {
    const colors = {
        onRoad: "#ECDE7C", 
        completed: "#7AC14D",
        onHold: "#FE4C4A",
        inProgress: "#B3D99B", 
    }

    return {
        flex: 1,
        padding: theme.spacing(2),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors[statusType],
        color: "#fff",
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[1],
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: theme.shadows[3],
        },
    }
})
