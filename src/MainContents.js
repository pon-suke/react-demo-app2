import React from 'react';
import Contents from './Contents';

class MainContents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            param: props.param,
            data: props.data.contents,
            max: props.data.totalCount
        }
    }

    componentDidMount() {
        if (!this.state.param.isDetail) {
            let tmp = this.state;
            this.setState({
                ...tmp,
                loading: true,
            });
            return;
        }
        // 記事を取得
        const key = {
            headers: { 'X-API-KEY': '9b30e206-4b28-4453-91f5-5d39d40d15a3' },
        };
        let offset = this.state.max - this.state.param.n;
        return fetch('https://ponsuke.microcms.io/api/v1/diary?offset=' + offset + '&limit=1', key)
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

    renderContents(i, c = "", d) {
        return <Contents
            key={i.id}
            title={i.title}
            text={i.main}
            date={i.updatedAt}
            class={c + " maincontent"}
            img={i.thumbnail.url}
            articleNumber={d}
        />;
    }

    render() {
        if (this.state.data && this.state.loading) {
            console.log(this.state);
            let exClass = (Math.sign(this.state.param.p) || this.state.param.p == undefined) ? "articleList" : "";
            let data = this.state.data;
            let offset = this.state.max - 10 * (this.state.param.p - 1);
            return (
                <div id="main" >
                    {!this.state.param.isDetail
                        ? this.state.data.map((d, i) => {
                            return this.renderContents(d, exClass, offset-i)
                        })
                        : this.renderContents(data.contents[0])
                    }
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

export default MainContents;