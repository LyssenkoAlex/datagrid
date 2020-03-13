export const SORT = 'SORT';
export const SET_PAGE = 'SET_PAGE';
export const MOVE_PAGE = 'MOVE_PAGE';
export const SORT_COLUMN = 'SORT_COLUMN';
export const FILTER = 'FILTER';
export const FILTER_ITEM = 'FILTER_ITEM';
export const COMPLEX_SORT = 'COMPLEX_SORT';


export function sort(id) {
    return {type:SORT, id}
}

export function setSelectedPage(number) {
    return {type:SET_PAGE, number}
}

export function movePage(number) {
    return {type:MOVE_PAGE, number}
}

export function sortColumn(column) {
    return {type:SORT_COLUMN, column}
}

export function filterData(value) {
    return {type:FILTER, value}
}

export function filterItem(value) {
    return {type:FILTER_ITEM, value}
}

export function complexSort(value) {
    return {type:COMPLEX_SORT, value}
}
