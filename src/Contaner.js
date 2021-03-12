import React from 'react';
import SideContents from './SideContents';
import MainContents from './MainContents';
import PageNavi from './PageNavi';
import getParams from './getParams';

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }
    componentDidMount() {
        // 記事を取得
        const key = {
            headers: { 'X-API-KEY': '9b30e206-4b28-4453-91f5-5d39d40d15a3' },
        };
        let param = getParams(),
            offset = (param.p - 1) * 10;
        return fetch('https://ponsuke.microcms.io/api/v1/diary?offset=' + offset, key)
            .then((response) => response.json())
            .then((responseJson) => {
                let tmp = this.state;
                this.setState({
                    ...tmp,
                    loading: true,
                    data: responseJson
                });
                console.log(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        console.log(getParams())
        if (this.state.loading) {
            return (
                <div id="container">
                    <MainContents param={getParams()} data={this.state.data} />
                    <PageNavi class={"sp_only"} param={getParams()} max={this.state.data.totalCount} />
                    <SideContents />
                    <PageNavi class={"pc_only"} param={getParams()} max={this.state.data.totalCount} />
                </div>
            );
        } else {
            return (
                <div>
                    <p>Loading...</p>
                </div>
            );
        }
    }
}

export default Container;