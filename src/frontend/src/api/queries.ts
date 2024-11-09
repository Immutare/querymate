export interface IQueryRequest {
    request: string;
    response: string;
    datecreated: Date;
}

export function postQuery(request: string): Promise<any> {
	return fetch('localhost:3000', {
        method: 'POST',
        body: JSON.stringify({
            request
        }), 
    });
}


export function getQueries(): Promise<any> {
    return fetch('localhost:3000');
}

