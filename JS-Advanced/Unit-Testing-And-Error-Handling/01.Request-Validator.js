function requestValidator(HTTPobj){

    const uriPattern= /^[A-za-z0-9\.]+$|[*]/g;
    const messagePattern= /^[^\<\>\\&\'\"]+$/g


    if(HTTPobj.hasOwnProperty('method')){
        if(HTTPobj.method !== 'GET' && HTTPobj.method !== 'POST' && HTTPobj.method !== 'DELETE' && HTTPobj.method !== 'CONNECT'){
            throw Error (`Invalid request header: Invalid Method`);
        }
    }
    else{
        throw Error ('Invalid request header: Invalid Method')
    }

    if(HTTPobj.hasOwnProperty('uri')){
        if(uriPattern.exec(HTTPobj.uri) === null){
            throw Error ('Invalid request header: Invalid URI')
        }
    }
    else{
        throw Error ('Invalid request header: Invalid URI')
    }

    if(HTTPobj.hasOwnProperty('version')){
        if(HTTPobj.version !== 'HTTP/0.9' && HTTPobj.version !== 'HTTP/1.0' && HTTPobj.version !== 'HTTP/1.1' && HTTPobj.version !== 'HTTP/2.0'){
            throw Error ('Invalid request header: Invalid Version')
        }
    }
    else{
        throw Error ('Invalid request header: Invalid Version')
    }

    if(HTTPobj.hasOwnProperty('message')){
        if(messagePattern.exec(HTTPobj.message) === null && HTTPobj.message !== ''){
            throw Error ('Invalid request header: Invalid Message')
        }
    }
    else{
        throw Error ('Invalid request header: Invalid Message')
    }
    return HTTPobj;
}
requestValidator({
    method: 'POST',
    uri: 'defineapps',
    version: 'HTTP/1.1',
    message: ''})