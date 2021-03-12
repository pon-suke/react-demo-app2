const getParams = () => {
    let urlParamStr = window.location.search;
    let params = {};
    if (urlParamStr) {
        //?を除去
        urlParamStr = urlParamStr.substring(1)
        //urlパラメータをオブジェクトにまとめる
        urlParamStr.split('&').forEach(param => {
            const temp = param.split('=')
            //pramsオブジェクトにパラメータを追加
            params = {
                ...params,
                [temp[0]]: temp[1]
            }
        })
        if (params.p == undefined) params.p = 1;
        let n = params.n,
            isDetail = Math.sign(n) ? n : 0;
        if (isNaN(n)) params.n = 0;
        params.isDetail = isDetail;
        return params;
    } else {
        params.p = 1;
        params.isDetail = 0;
        return params;
    }
}

export default getParams;