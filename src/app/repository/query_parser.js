export default (filters) => {
    return '?' + Object.keys(filters).filter(item=>filters[item]).map(item => item+"="+String(filters[item])).join('&')
}