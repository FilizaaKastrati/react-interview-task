import type { GenericOption } from "./select";


export type StatusType = "onRoad" | "completed" | "onHold" | "inProgress";

export interface StatusItem {
  type: StatusType;
  count: number;
  label: string;
}
export interface StatusHeaderProps {
  statusItems: StatusItem[];
  className?: string;
}
export const statusOptions: GenericOption[] = [
  { label: "In Progress", value: "In Progress", color: "#B3D99B" },
  { label: "Completed", value: "Completed", color: "#7AC14D" },
  { label: "On Hold", value: "On Hold", color: "#ECDE7C" },
];