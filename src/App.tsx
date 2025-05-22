import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { useState, createContext } from "react"
import Root from "./routes/Root"
import JobsPage from "./routes/JobsPage"
import ServicesPage from "./routes/ServicesPage"
import { type Job, sampleJobs } from "./constants/jobs"
import { JobsProvider } from "./contexts/JobsContext"

// eslint-disable-next-line react-refresh/only-export-components
export const JobsContext = createContext<{
  jobs: Job[]
  setJobs: (jobs: Job[]) => void
}>({ jobs: [], setJobs: () => {} })

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff6b6b",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "jobs",
        element: <JobsPage />,
      },
      {
        path: "jobs/:jobId/services",
        element: <ServicesPage />,
      },
      {
        path: "",
        element: <JobsPage />,
      },
    ],
  },
]);

function App() {
  const [jobs, setJobs] = useState<Job[]>(sampleJobs)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <JobsProvider value={{ jobs, setJobs }}>
        <RouterProvider router={router} />
      </JobsProvider>
    </ThemeProvider>
  )
}

export default App
