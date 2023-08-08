import {Router} from "express";
import {
    getPrestamos,
    getPrestamo,
    createPrestamo,
    deletePrestamo,
    updatePrestamo,
} from "../controllers/prestamo.controller.js"
const router = Router()

router.get("/prestamo",getPrestamos);

router.get("/prestamo/:cedula",getPrestamo);

router.post("/prestamo",createPrestamo);

router.put("/prestamo/:cedula", updatePrestamo );

router.delete("/prestamo/:cedula", deletePrestamo);
export default router 