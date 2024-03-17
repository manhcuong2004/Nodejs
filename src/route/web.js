import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);

    router.get('/about', homeController.getAboutPage);
    
    router.get('/cuong', (req,res) => {
        return res.send('Hello world Cuong Vipro')
    });
    

    return app.use("/", router);

    
    
}

module.exports = initWebRoutes;