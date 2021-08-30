import express from 'express';
import {crossorigin} from '../middlewares/crossorigin.mw';
var middleware:any = {};
middleware.globalMiddleware = [
    express.json() // fetch json body data
];
middleware.one = {
    crossorigin:crossorigin,
}
middleware.auth ={

}

export = middleware;