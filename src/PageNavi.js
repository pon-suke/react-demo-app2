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
                    ? PageNavi_list(this.state.param)//記事一覧
                    : PageNavi_home()//記事詳細
                }
            </div>
        );
    }
}
function PageNavi_list(props) {
    return (
        <p>
            {props.n != 0 ? ''
                : "<a href='?n=" + (props.n - 1) + "'>前の記事へ</a>&emsp;"}
            <a href="?p=1">ホーム</a>
        </p>
    );
}
function PageNavi_home(props) {
    return <div>hoge</div>;
}


export default PageNavi;