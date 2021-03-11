import React from 'react';

class PageNavi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            class: props.class,
            max: props.max
        }
    }

    render() {
        console.log(this.state.max);
        return (
            <div id="page_navi" className={this.state.class}>
                <a href="?p=1">ホーム</a>
            </div>
        );
    }
}

export default PageNavi;