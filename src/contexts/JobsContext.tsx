import { createContext } from "react"
import type { Job } from "../constants/jobs"

// eslint-disable-next-line react-refresh/only-export-components
export const JobsContext = createContext<{
  jobs: Job[]
  setJobs: (jobs: Job[]) => void
}>({ jobs: [], setJobs: () => {} })

export const JobsProvider = JobsContext.Provider
