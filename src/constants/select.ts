
export interface Option {
    label: string;
    value: string | number;
    color: string;
}

export interface RHFMultiSelectFieldProps {
    name: string;
    label: string;
    options: Option[];
    helperText?: string;
    onChange?: (selected: (string | number)[]) => void;
    renderValue?: (selected: (string | number)[]) => React.ReactNode;
}

export const selectStyles = {
    "& .MuiFilledInput-input": { py: 1 },
    "& .MuiFilledInput-root": {
      borderRadius: "10px",
      bgcolor: "#F3F4F7",
      "&:hover":   { bgcolor: "#F3F4F7" },
      "&.Mui-focused": { bgcolor: "#F3F4F7" },
    },
    "& .MuiSelect-select": { bgcolor: "#F3F4F7", borderRadius: "10px" },
    "&:hover": {
      bgcolor: "#F3F4F7",
      "& .MuiSelect-select": { bgcolor: "#F3F4F7" },
    },
    "&.Mui-focused": {
      bgcolor: "#F3F4F7",
      "& .MuiSelect-select": { bgcolor: "#F3F4F7" },
    },
    "&:before, &:after": { display: "none" },
  };
  

export const chipStyles = {
    bgcolor: 'transparent',
    border: 'none',
    '& .MuiChip-deleteIcon': {
        color: 'error.main',
        fontSize: 18,
        '&:hover': {
            color: 'error.dark',
        },
    },
    '&:hover': {
        bgcolor: 'transparent',
    },
};
export interface GenericOption<T = string | number> {
    label: string;
    value: T;
    color?: string;
    hover?: string;
}

export interface RHFSelectFieldProps<T = string | number> {
    name: string;
    options: GenericOption<T>[];
    label?: string;
    helperText?: React.ReactNode;
    onChange?: (value: T) => void;
}