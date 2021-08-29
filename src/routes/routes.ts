import express from 'express';
import { testController } from "../controllers/test.controller";
let router = express.Router();

router.post('/',testController.test);



export var routes = router;