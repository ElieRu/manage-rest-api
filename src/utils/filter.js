export default function filter (tabName, tabId, id, datas, unique = false) {
    let data_array = []
    
    const unique_post = 
        tabName == 'posts' && unique ? 'id' :
        tabName == 'users' && unique ? 'id' : 
        tabId

    if (unique && id !== null) {
        if (tabName == 'posts' || tabName == 'users') {
            for (let i = 0; i < datas.length; i++) {
                if (datas[i][unique_post] === id) {
                    return datas[i];
                }
            }
        }
    } else {
        console.log({datas});
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
