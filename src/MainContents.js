import React from 'react';
import Contents from './Contents';

class MainContents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            param: props.param,
            data: props.data
        }
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
        if (this.state.data) {
            console.log(this.state);
            let p = this.state.param.p,
                n = this.state.param.n,
                exClass = (Math.sign(p) || p === undefined) ? "articleList" : "",
                isDetail = Math.sign(n) ? n : 0;
            console.log(p, n, exClass, isDetail);
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