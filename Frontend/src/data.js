

export const errorMessageFor = (e) => {
    console.log(e)
    if(e?.originalStatus === 401) {
        return 'Unauthorized'
    }
    if(typeof e?.error === 'string') return e?.error;
    if(e?.data) {
        return e?.data?.error
    }
    return e.response?.data?.error || e?.data?.error || e.message
}


