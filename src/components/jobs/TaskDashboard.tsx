import type React from "react"
import { useState, useContext } from "react"
import {
    Box,
    Typography,
    Chip,
    Container,
    Paper,
    Link,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { JobsContext } from "../../contexts/JobsContext"
import StatusHeader from "./StatusHeader"
import InfoIcon from "@mui/icons-material/Info"
import { ActionButton } from "../ui/ActionButton"
import SearchInput from "../ui/SearchInput"
import TitleText from "../ui/TitleText"
import { getStatusColor, type Job, type TaskDashboardProps, type JobStatus, type JobFormValues} from "../../constants/jobs"
import CustomTable, { type Column } from "../ui/Table"
import JobFormModal from "./JobFormModal"

const TaskDashboard: React.FC<TaskDashboardProps> = ({
    title = "Title",
    infoText = "Informative piece of text that can be used regarding this modal.",
}) => {
    const navigate = useNavigate();
    const { jobs, setJobs } = useContext(JobsContext);
    const [searchTerm, setSearchTerm] = useState("")
    const [openCreate, setOpenCreate] = useState(false)

    const onRoadCount = jobs.filter((job) => job.status !== "Completed" && job.status !== "On Hold").length
    const completedCount = jobs.filter((job) => job.status === "Completed").length
    const onHoldCount = jobs.filter((job) => job.status === "On Hold").length

    const handleCreate = async (data: JobFormValues) => {
        const newId = String(Math.max(...jobs.map(j => parseInt(j.id))) + 1);
        const newJob: Job = {
            id: newId,
            name: data.name,
            status: data.status as JobStatus,
            category: data.category,
            services: data.category 
        }
        setJobs([newJob, ...jobs])
        setOpenCreate(false)
    }

    const filteredJobs = jobs.filter(
        (job) => job.name.toLowerCase().includes(searchTerm.toLowerCase())
    )   

    const columns: Column<Job>[] = [
        {
            field: 'name',
            headerName: 'Jobsite Name',
            align: 'center',
            width: '70%',
            renderCell: (job) => (
                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', gap: 2 }}>
                    <Link
                        component="button"
                        onClick={() => navigate(`/jobs/${job.id}/services`)}
                        sx={{
                            textDecoration: 'none',
                            '&:hover': { textDecoration: 'underline' },
                        }}
                    >
                        {job.name}
                    </Link>
                </Box>
            ),
        },
        {
            field: 'status',
            headerName: 'Status',
            align: 'center',
            width: '30%',
            renderCell: (job) => (
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>                   
                    <Chip
                        label={job.status}
                        sx={{
                            bgcolor: getStatusColor(job.status),
                            color: "white",
                            minWidth: "100px",
                            borderRadius: "4px",
                            fontSize: "0.875rem",
                            height: "28px",
                            '& .MuiChip-label': {
                                padding: '0 12px'
                            }
                        }}
                    />
                </Box>
            ),
        }
    ]

    return (     
        <Box sx={{ 
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
            backgroundColor: '#f5f5f5',
            py: 1,
            px: 2,
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Container
                disableGutters
                sx={{
                    width: '100%',
                    maxWidth: '100% !important',
                    borderRadius: "10px",
                    position: 'sticky',
                    top: 0,
                    zIndex: 2,
                    mb: 2,
                    flex: 'none'
                }}
            >
                <Paper elevation={2} sx={{ p: 1, display: 'flex', alignContent: "center", alignItems: "center" }}>
                    <StatusHeader
                        statusItems={[
                            { type: "onRoad", count: onRoadCount, label: "On Road" },
                            { type: "completed", count: completedCount, label: "Completed" },
                            { type: "onHold", count: onHoldCount, label: "On Hold" },
                        ]}
                    />
                </Paper>
            </Container>
            <Container
                disableGutters 
                sx={{
                    width: '100%',
                    maxWidth: '100% !important',
                    borderRadius: "10px",
                    flex: 1,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >                 
                <Paper elevation={2} sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    height: '100%',
                    overflow: 'hidden'
                }}>
                    <Box sx={{ 
                        display: "flex", 
                        alignItems: "center", 
                        bgcolor: "#F8F8FA", 
                        p: 1, 
                        position: 'sticky',
                        top: 0,
                        zIndex: 1
                    }}>
                        <TitleText>{title}</TitleText>
                    </Box>

                    <Box sx={{ 
                        display: "flex", 
                        alignItems: "center",  
                        p: 1,
                        position: 'sticky',
                        top: '48px',
                        zIndex: 1,
                        bgcolor: 'white'
                    }}>
                        <InfoIcon fontSize="small" color="primary" sx={{ mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                            {infoText}
                        </Typography>

                        <Box sx={{ ml: "auto", display: "flex", gap: 2, mb:2 }}>
                            <SearchInput
                                name="search"
                                value={searchTerm}
                                onChange={setSearchTerm}
                                placeholder="Search a driver"                                  
                            />
                            <ActionButton 
                                label="Create" 
                                actionVariant="create"
                                showIcon={true}
                                sx={{ minWidth: "120px" }}
                                onClick={() => setOpenCreate(true)}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ flex: 1, overflow: 'auto' }}>
                        <CustomTable
                            columns={columns}
                            rows={filteredJobs}
                            hover={true}
                            containerSx={{
                                height: '100%',
                                '& .MuiTableHead-root': {
                                    position: 'sticky',
                                    top: 0,
                                    zIndex: 1,
                                    bgcolor: 'white'
                                }
                            }}
                        />
                    </Box>
                    <JobFormModal
                        open={openCreate}
                        onClose={() => setOpenCreate(false)}
                        onSubmit={handleCreate}
                    />
                </Paper>
            </Container>
        </Box>
    )
}

export default TaskDashboard
