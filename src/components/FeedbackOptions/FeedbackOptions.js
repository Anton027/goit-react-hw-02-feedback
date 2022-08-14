import { Box } from "components/Box"
// import { ReactPropTypes } from "react"
export const FeedbackOptions = ({ options: { good, neutral, bad }, onLeaveFeedbackGood, onLeaveFeedbackNeutral,onLeaveFeedbackBad }) => {
    return (
        <Box as={'ul'} display='flex' gridGap="10px">
            <li>
                <button onClick={onLeaveFeedbackGood}>Good</button>
            </li>
            <li>
                <button onClick={onLeaveFeedbackNeutral}>Neutral</button>
            </li>
            <li>
                <button onClick={onLeaveFeedbackBad}>Bad</button>
            </li>
        </Box>
    )
}

FeedbackOptions.propTypes = {};