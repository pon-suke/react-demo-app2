const getParams = () => {
    let urlParamStr = window.location.search
    if (urlParamStr) {
        //?を除去
        urlParamStr = urlParamStr.substring(1)
        let params = {}
        //urlパラメータをオブジェクトにまとめる
        urlParamStr.split('&').forEach(param => {
            const temp = param.split('=')
            //pramsオブジェクトにパラメータを追加
            params = {
                ...params,
                [temp[0]]: temp[1]
            }
        })
        if (params.p === undefined) params.p = 1;
        return params;
    }
}

export default getParams;