import type React from "react"
import type { StatusHeaderProps } from "../../constants/status"
import { Card, Container } from "../ui/Card"
import { Typography } from "@mui/material"

const StatusHeader: React.FC<StatusHeaderProps> = ({ statusItems, className }) => {
    return (
        <Container className={className}>
            {statusItems.map((item) => (
                <Card key={item.type} statusType={item.type}>
                    <Typography variant="h6" fontWeight="medium">
                        {item.count} {item.label}
                    </Typography>
                </Card>
            ))}
        </Container>
    )
}

export default StatusHeader
