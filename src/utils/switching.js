
import filter from './filter.js'

export default function switching (name, datas, id = null, unique) {
    
    switch (name) {
        case 'posts':
            return filter('posts', 'userId', id, datas, unique);
        case 'users':
            return filter('users', 'userId', id, datas, unique);
        case 'albums':
            return filter('albums', 'userId', id, datas)
        case 'photos':
            return filter('photos', 'albumId', id, datas);
        case  'todos':
            return filter('todos', 'userId', id, datas);
        default:
            console.log('bad request');
    }
}

