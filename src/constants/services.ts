export interface RowData {
  id: number;
  item: string;
  quantity: number;
  description: string;
  notes: string;
}

export interface Props {
    open: boolean;
    onClose: () => void;
    onSubmit: (data: RowData) => Promise<void>;
    initialData?: RowData;
}

export const services: RowData[] = [
  {
    id: 1,
    item: "G42525",
    quantity: 10,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    item: "M271",
    quantity: 83,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    item: "MV496",
    quantity: 31,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    item: "S2507",
    quantity: 47,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    item: "AB644",
    quantity: 52,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    item: "F7876",
    quantity: 10,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 7,
    item: "R6955",
    quantity: 30,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 8,
    item: "AQ2953",
    quantity: 32,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 9,
    item: "A1478",
    quantity: 16,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 10,
    item: "A37244",
    quantity: 13,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 11,
    item: "M8913",
    quantity: 10,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
export const SELECT_OPTIONS = services.map((service) => ({
  label: service.item,
  value: service.item,
}));
export const FORM_FIELDS = {
  topRow: [
    {
      name: "item",
      label: "Item",
      required: true,
      fullWidth: true,
      variant: "filled",
      options: SELECT_OPTIONS,
    },
    {
      name: "quantity",
      label: "Quantity",
      type: "number",
      required: true,
      fullWidth: true,
      variant: "filled",
    },
  ],
  fullWidth: [
    {
      name: "description",
      label: "Description",
      required: true,
      fullWidth: true,
      multiline: true,
      rows: 3,
      variant: "filled",
    },
    {
      name: "notes",
      label: "Notes",
      required: true,
      fullWidth: true,
      multiline: true,
      rows: 3,
      variant: "filled",
    },
  ],
} as const;