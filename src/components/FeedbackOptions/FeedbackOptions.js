import { Box } from "components/Box"
export const FeedbackOptions = ({ options: { good, neutral, bad }, onLeaveFeedback }) => {
    return (
        <Box as={'ul'} display='flex' gridGap="10px">
            <li>
                <button onClick={() =>  onLeaveFeedback }>{`Good ${good}`}</button>
            </li>
            <li>
                <button onClick={() =>onLeaveFeedback}>{neutral}</button>
            </li>
            <li>
                <button onClick={() =>  onLeaveFeedback}>{bad}</button>
            </li>
        </Box>
    )
}