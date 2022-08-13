import { Box } from "components/Box"
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <Box as={"ul"}>
            <li>{`Good: ${good}`}</li>
            <li>{`Netural: ${neutral}`}</li>
            <li>{`Bad: ${bad}`}</li>
            <li>{`Total: ${total}`}</li>
            <li>{`Positive feedback: ${positivePercentage}%`}</li>
        </Box>
    )
}