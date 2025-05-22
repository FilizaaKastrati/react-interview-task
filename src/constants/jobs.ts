export const getStatusColor = (status: JobStatus): string => {
  switch (status) {
    case "Completed":
      return "#7AC14D";
    case "On Hold":
      return "#ECDE7C";
    case "In Progress":
      return "#B3D99B";
    default:
      return "#9e9e9e";
  }
};

export type JobStatus = "Completed" | "On Hold" | "In Progress";

export interface Job {
  id: string;
  name: string; 
  status: JobStatus;
  services?: string[]; 
  category?: string[];
}

export interface TaskDashboardProps {
  title?: string;
  infoText?: string;
}

export const sampleJobs: Job[] = [
  {
    id: "1",
    name: "1689 E 21st St, Brooklyn, NY 11229",
    status: "Completed",    category: ["Shed", "Scaffold"],
  },
  {
    id: "2",
    name: "1705 E 22nd St, Brooklyn, NY 11229",
    status: "On Hold",
    category: ["Sidewalk Shed", "Scaffold"],
  },
  {
    id: "3",
    name: "47 Lake St, Brooklyn, NY 11223",
    status: "Completed",
    category: ["Sidewalk Shed"],
  },
  {
    id: "4",
    name: "296 Bay 19th St, Brooklyn, NY 11214",
    status: "On Hold",    category: ["Scaffold", "Shoring"],
  },
  {
    id: "5",
    name: "6908 13th Ave, Brooklyn, NY 11228",
    status: "On Hold",
    category: ["Sidewalk Shed", "Scaffold", "Shoring"],
  },
  {
    id: "6",
    name: "86-04 Shore Pkwy, Jamaica, NY 11414",
    status: "In Progress",
    category: ["Sidewalk Shed", "scaffold"],
  },
  {
    id: "7",
    name: "47 Lake St, Brooklyn, NY 11223",
    status: "Completed",
    category: ["Sidewalk Shed"],
  },
  {
    id: "8",
    name: "296 Bay 19th St, Brooklyn, NY 11214",
    status: "On Hold",    category: ["Scaffold", "Shoring"],
  },
  {
    id: "9",
    name: "6908 13th Ave, Brooklyn, NY 11228",
    status: "On Hold",
    category: ["Sidewalk Shed", "Scaffold", "Shoring"],
  },
  {
    id: "10",
    name: "86-04 Shore Pkwy, Jamaica, NY 11414",
    status: "In Progress",
    category: ["Sidewalk Shed", "scaffold"],
  },
  {
    id: "11",
    name: "123 Main St, New York, NY 10001",
    status: "Completed",
    category: ["Sidewalk Shed", "scaffold"],
  },
  {
    id: "12",
    name: "456 Elm St, Los Angeles, CA 90001",
    status: "On Hold",
    category: ["Sidewalk Shed", "scaffold"],
  },
  {
    id: "13",
    name: "789 Oak St, Chicago, IL 60601",
    status: "In Progress",
    category: ["Sidewalk Shed", "scaffold"],
  },
  {
    id: "14",
    name: "101 Pine St, Houston, TX 77001",
    status: "Completed",
    category: ["Sidewalk Shed", "scaffold"],
  },
  {
    id: "15",
    name: "202 Maple St, Phoenix, AZ 85001",
    status: "On Hold",
    category: ["Sidewalk Shed", "scaffold"],
  },
  {
    id: "16",
    name: "303 Cedar St, Philadelphia, PA 19101",
    status: "In Progress",
    category: ["Sidewalk Shed", "scaffold"],
  },
  {
    id: "17",
    name: "404 Birch St, San Antonio, TX 78201",
    status: "Completed",
    category: ["Sidewalk Shed"],
  },
  {
    id: "18",
    name: "505 Walnut St, San Diego, CA 92101",
    status: "On Hold",
    category: ["scaffold", "shoring"],
  },
  {
    id: "19",
    name: "606 Cherry St, Dallas, TX 75201",
    status: "In Progress",
    category: ["Sidewalk Shed", "scaffold"],
  },
  {
    id: "20",
    name: "707 Spruce St, San Jose, CA 95101",
    status: "Completed",
    category: ["Sidewalk Shed", "scaffold"],
  },
  {
    id: "21",
    name: "808 Fir St, Austin, TX 73301",
    status: "On Hold",
    category: ["scaffold", "shoring"],
  },
  {
    id: "22",
    name: "909 Ash St, Jacksonville, FL 32201",
    status: "In Progress",
    category: ["Sidewalk Shed", "Scaffold"],
  },
  {
    id: "23",
    name: "1010 Palm St, Fort Worth, TX 76101",
    status: "Completed",
    category: ["Sidewalk Shed", "Scaffold"],
  },
  {
    id: "24",
    name: "1111 Cypress St, Columbus, OH 43201",
    status: "On Hold",
    category: ["scaffold", "shoring"],
  },
  {
    id: "25",
    name: "1212 Willow St, Charlotte, NC 28201",
    status: "In Progress",
    category: ["Sidewalk Shed", "scaffold"],
  },
  {
    id: "26",
    name: "1313 Poplar St, San Francisco, CA 94101",
    status: "Completed",
    category: ["Sidewalk Shed", "scaffold"],
  },
  {
    id: "27",
    name: "1414 Birch St, Indianapolis, IN 46201",
    status: "On Hold",
    category: ["scaffold", "shoring"],
  },
  {
    id: "28",
    name: "1515 Oak St, Seattle, WA 98101",
    status: "In Progress",
    category: ["scaffold", "shoring"],
  },
  {
    id: "29",
    name: "1616 Maple St, Denver, CO 80201",
    status: "Completed",
    category: ["Sidewalk Shed", "scaffold"],
  },
  {
    id: "30",
    name: "1717 Pine St, Washington, DC 20001",
    status: "On Hold",
    category: ["scaffold"],
  },
];


export interface JobFormValues {
    name: string;
    category: string[];
    status: JobStatus;
    services: string[];
}

export interface Props {
    open: boolean;
    onClose: () => void;
    onSubmit: (data: JobFormValues) => Promise<void>;
    initialData?: Partial<JobFormValues>;
}
