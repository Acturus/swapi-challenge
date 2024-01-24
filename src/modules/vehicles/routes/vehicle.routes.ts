import KEYS from '../../shared/IoC/Keys';
import container from "../../shared/IoC/Container";
import {asyncHandler} from "../../shared/helpers";

import {Request, Response, Router} from 'express';
import {validate} from "../../shared/middlewares/validation.middleware";
import { IVehicleController } from '../contracts/vehicle.contracts';
import { param } from 'express-validator';

const VehicleRoutes = Router();
const vehicle = container.resolve<IVehicleController>(KEYS.IVehicleController);

VehicleRoutes.get('/:id', [
    validate([
        param("id").isInt({ min: 1 }).withMessage("Id no válido"),
    ]),
    asyncHandler((req: Request, res: Response) => vehicle.one(req, res))
]);

export default VehicleRoutes;