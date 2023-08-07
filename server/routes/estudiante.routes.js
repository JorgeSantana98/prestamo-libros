import {Router} from "express";
import {
    getEstudiantes,
    getEstudiante,
    createEstudiante,
    deleteEstudiante,
    updateEstudiante,
} from "../controllers/estudiante.controller.js"
const router = Router()

router.get("/student",getEstudiantes);

router.get("/student/:cedula",getEstudiante);

router.post("/student",createEstudiante);

router.put("/student/:cedula", updateEstudiante);

router.delete("/student/:cedula",deleteEstudiante);
export default router