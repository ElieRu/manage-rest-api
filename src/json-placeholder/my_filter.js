

function get_datas(tabName, tabId, id, datas) {
    let data_array = []

    if (tabName == 'users' && id !== null) {
        for (let i = 0; i < datas.length; i++) {
            if (datas[i][tabId] === id) {
                return datas[i];
            }
        }
    } 
    else {
        if (id == null) {
            for (let i = 0; i < datas.length; i++) {
                data_array.push(datas[i]);
            }
        } else {
            for (let i = 0; i < datas.length; i++) {
                if (datas[i][tabId] === id) {
                    data_array.push(datas[i]);
                }
            }
        }
    } 
    return data_array;
}


export default function my_filter (name, datas, id = null) {
    
    switch (name) {
        case 'posts':
            return get_datas('posts', 'userId', id, datas);
        case 'users':
            return get_datas('users', 'userId', id, datas);
        case 'albums':
            return get_datas('albums', 'userId', id, datas)
        case 'photos':
            return get_datas('photos', 'albumId', id, datas);
        case  'todos':
            return get_datas('todos', 'userId', id, datas);
        default:
            console.log('bad request');
    }
}

