

function get_datas(tabName, tabId, id, datas) {
    let data_array = []

    if (tabName == 'users') {
        for (let i = 0; i < datas.length; i++) {
            if (datas[i][tabId] === id) {
                return datas[i];
            }
        }
    } else {
        for (let i = 0; i < datas.length; i++) {
            if (datas[i][tabId] === id) {
                data_array.push(datas[i]);
            }
        }
    }
    return data_array;
}


export default function my_filter (name, datas, id = null) {

    let all_datas = []

    if (id === null) {
        for (let i = 0; i < datas.length; i++) {
            all_datas.push(datas[i]);
        }
    } else {

        switch (name) {
            case 'users':
                return get_datas('users', 'userId', id, datas);
            case 'albums':
                return get_datas('albums', 'userId', id, datas)
            case 'photos':
                return get_datas('photos', 'userId', id, datas);
            case  'todos':
                return get_datas('todos', 'userId', id, datas);
        }
    }
    
    return all_datas;
}


