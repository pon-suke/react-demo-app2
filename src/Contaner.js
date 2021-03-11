import React from 'react';
import SideContents from './SideContents';
import MainContents from './MainContents';
import PageNavi from './PageNavi';
import getParams from './getParams';

class Container extends React.Component {
    render() {
        // console.log(getParams())
        return (
            <div id="container">
                <MainContents param={getParams()} />
                <PageNavi class={"sp_only"} param={getParams()} />
                <SideContents />
                <PageNavi class={"pc_only"} />
            </div>
        );
    }
}

export default Container;