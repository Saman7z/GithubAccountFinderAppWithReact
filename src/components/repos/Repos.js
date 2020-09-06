import React from 'react'
import PropTypes from 'prop-types';
import RepoItem from './RepoItem'
 const Repos = ({repos}) => {
    return (
        repos.map(item => <RepoItem repo={item} key={item.id}/>)
    )
}
Repos.propType = {
    repos: PropTypes.array.isRequired
}
export default Repos