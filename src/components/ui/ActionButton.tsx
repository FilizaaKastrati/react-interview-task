import React from "react";
import { Button, type ButtonProps, type SxProps, type Theme, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export type ActionButtonVariant = "create" | "cancel" | "save" | "back";

export interface ActionButtonProps extends Omit<ButtonProps, "variant"> {
    actionVariant: ActionButtonVariant;
    label?: string;
    showIcon?: boolean;
    sx?: SxProps<Theme>;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
    actionVariant,
    label,
    showIcon = true,
    sx = {},
    ...props
}) => {    const buttonConfig = {
        create: {
            label: label || "Create",
            icon: <AddIcon />,
        color: "#71CF48",
        hoverColor: "#68C142", 
            textColor: "white",
        },
        cancel: {
            label: label || "Cancel Changes",
            icon: <CloseIcon />,
            color: "#FE4C4A",
            hoverColor: "#EB4345", 
            textColor: "white",
        },
        save: {
            label: label || "Save Changes",
            icon: <CheckIcon />,
            color: "#71CF48",
            hoverColor: "#68C142", 
            textColor: "white",
        },
        back: {
            label: label || "Go Back",
            icon: <ArrowBackIcon />,
            color: "#1264A3",
            hoverColor: "#0F5C97", 
            textColor: "white",
        },
    } as const;

    const config = buttonConfig[actionVariant];

    return (
        <Button
            variant="contained"
            disableElevation
            size="large"
            sx={{
                p: 0,
                height: 40,
                borderRadius: 2,
                backgroundColor: config.color,
                color: config.textColor,
                textTransform: "none",
                fontWeight: 500,
                fontSize: "14px",
                display: "flex",
                overflow: "hidden",                "&:hover": {
                    backgroundColor: config.hoverColor,
                    "& .icon-container": {
                        borderColor: config.color,
                    }
                },
                ...sx,
            }}
            {...props}
        >
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 3,
                }}
            >
                {config.label}
            </Box>

            {showIcon && (
                <Box
                    className="icon-container"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        px: 1,
                        height: "100%",
                        borderLeft: `1px solid ${config.hoverColor}`,
                        transition: 'border-color 0.9s ease', 
                    }}
                >
                    {config.icon}
                </Box>
            )}
        </Button>
    );
};
