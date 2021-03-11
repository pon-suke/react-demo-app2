import React from 'react';
import Contents from './Contents';

class MainContents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            param: props.param
        }
    }

    componentDidMount() {
        // 記事を取得
        const key = {
            headers: { 'X-API-KEY': '9b30e206-4b28-4453-91f5-5d39d40d15a3' },
        };
        return fetch('https://ponsuke.microcms.io/api/v1/diary', key)
            .then((response) => response.json())
            .then((responseJson) => {
                let tmp = this.state;
                this.setState({
                    ...tmp,
                    loading: true,
                    data: responseJson.contents,
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
        if (this.state.loading) {
            let p = this.state.param.p,
                n = this.state.param.n,
                exClass = (Math.sign(p) || p === undefined) ? "articleList" : "",
                isDetail = Math.sign(n) ? n : 0;
            console.log(p, n, exClass, isDetail);
            console.log(this.state);
            let data = this.state.data;
            return (
                <div id="main" >
                    {!isDetail
                        ? this.state.data.map((d, i) => {
                            return this.renderContents(d, exClass, (data.length - i))
                        })
                        : this.renderContents(data.reverse()[isDetail - 1])
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