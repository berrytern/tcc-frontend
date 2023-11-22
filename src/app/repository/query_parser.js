export default (filters) => {
    return '?' + Object.keys(filters).map(item => item+"="+String(filters[item])).join('&')
}