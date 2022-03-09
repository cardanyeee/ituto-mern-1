import React from 'react';
import { Helmet } from 'react-helmet';

const MetaData = ({ title, styles }) => {
    return (
        <Helmet>
            <title>
                {`${title} - iTuto`}
            </title>
            <style>
                {styles}
            </style>
        </Helmet>
    )
}

export default MetaData
