export const SORT = 'SORT';
export const SET_PAGE = 'SET_PAGE';

export function sort(id) {
    return {type:SORT, id}
}

export function setSelectedPage(number) {
    return {type:SET_PAGE, number}
}
