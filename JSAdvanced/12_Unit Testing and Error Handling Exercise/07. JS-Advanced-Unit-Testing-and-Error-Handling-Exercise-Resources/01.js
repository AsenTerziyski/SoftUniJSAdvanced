function validator(object) {

    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriRegex = (/\w+/gm);
    let messageText = (/[<>\&'"]+/gm);

    if (!object.method || !validMethods.includes(object.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    if (!object.uri || object.uri === '' || !uriRegex.test(object.uri)) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (!object.version || !validVersions.includes(object.version)) {
        throw new Error ("Invalid request header: Invalid Version");
    }

    if (object.message === undefined || messageText.test(object.message)) {
        throw new Error ("Invalid request header: Invalid Message");
    }

    return object;
}



validator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}
);