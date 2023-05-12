import {toast} from "react-toastify";

export const formatError = (error) => {
    return `${error.message}${error.details ? ': ' + error.details : ''}`;
}

export const handleError = (error) => {
    toast(formatError(error), {type: 'error'});
    return {error}
}
