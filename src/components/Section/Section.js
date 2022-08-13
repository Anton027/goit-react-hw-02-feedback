import PropTypes from 'prop-types';

import { Box } from 'components/Box';
// import { Children } from 'react';

export const Section = ({ title, children }) => {
    return (
        <Box as="section">
            <h2>
                {title}
            </h2>
            {children}
        </Box>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
    
}