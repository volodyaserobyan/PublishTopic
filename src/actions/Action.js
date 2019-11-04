
export const loginAct = (url, infoObj) => {

    return (dispatch) => {
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'language': 1,

            },
            body: JSON.stringify(infoObj)
        }).then((response) => response.json())
            .then(res => {
                    return res
            }).then(info => {
                dispatch({
                    type: "SUCCESS_LOGIN",
                    info: info
                })
            }
            ).catch(error => {
                dispatch({
                    type: 'ERROR',
                    info: error
                })
            })
    }
}

export const getCategory = (url) => {
    return (dispatch) => {
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'language': 1,
                "Authorization": "Bearer " + localStorage.getItem('authToken')
            }
        })
            .then(response => response.json())
            .then(category => dispatch({
                type: 'GET_CATEGORY',
                category: category
            })).catch(error => {
            })
    }
}

export const setData = data => {
    return {
        type: 'SET_DATA_CATEGORY_TOPIC',
        catAndTop: data
    }
}

export const setDataTopic = data => {
    return {
        type: 'SET_DATA_TOPIC',
        topic: data
    }
}

export const setMedia = data => {
    return {
        type: 'SET_MEDIA',
        media: data
    }
}

export const publishTopic = (url, infoObj) => {

    return (dispatch) => {
        fetch(url, {
            method: 'POST',
            headers: {
                // "accept": "application/json",
                "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryIn312MOjBWdkffIM",
                "Authorization": "Bearer " + localStorage.getItem('authToken')
            },
            body: infoObj
        }).then((response) => response.json())
            .then(res => {
                    return res
            }).then(data => {
                dispatch({
                    type: "SUCCESS_PUBLISH",
                    data: data
                })
            }
            ).catch(error => {
                dispatch({
                    type: 'ERROR',
                    data: error
                })
            })
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
} 