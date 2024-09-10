import React from 'react';
import PropTypes from 'prop-types';

function Tags({ tags }) {
    if (!tags || tags.length === 0) return null;

    return (
        <div className='tags'>
            {tags.map((tag, index) => (
                <span key={index} className='tag'>
                    {tag}
                </span>
            ))}
        </div>
    );
}

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
