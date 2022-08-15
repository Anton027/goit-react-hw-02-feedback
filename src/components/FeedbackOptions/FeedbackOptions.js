import { Box } from "components/Box"
import PropTypes from 'prop-types';
export const FeedbackOptions = ({  options, onLeaveFeedback }) => {
    return (
        <Box as={'ul'} display='flex' gridGap="10px">
            {options.map(option => (
                <li key={option}>
                    <button
                        type="button"
                        onClick={() => onLeaveFeedback(option)}>
                        {option}
                    </button>
                </li>
            ))}
        </Box>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};