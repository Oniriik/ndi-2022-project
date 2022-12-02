export function emptyFunction() {
    // do nothing
}
export function timestampToTime(timestamp){
    const date    = new Date(timestamp);
    const hours   = date.getHours();
    const minutes = date.getMinutes();
    return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2);
}
