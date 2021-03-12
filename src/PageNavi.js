import React from 'react';

class PageNavi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            class: props.class,
            param: props.param,
            max: props.max
        }
    }

    render() {
        return (
            <div id="page_navi" className={this.state.class}>
                {!this.state.param.isDetail
                    ? PageNavi_list(this.state)//記事一覧
                    : PageNavi_home()//記事詳細
                }
            </div>
        );
    }
}
function PageNavi_list(props) {
    let pages = props.max / 10;
    console.log(props)
    return (
        <p>
            {props.param.p == 1 ? ''
                : <a href={"?p=" + (props.param.p - 1)}>前のページへ</a>}
            <span>&emsp;</span>
            <a href="?p=1">ホーム</a>
            <span>&emsp;</span>
            {props.param.p == Math.ceil(pages) ? ""
                : <a href={"?p=" + (parseInt(props.param.p) + 1)}>次のページへ</a>}
        </p>
    );
}
function PageNavi_home(props) {
    return <div>hoge</div>;
}


export default PageNavi;