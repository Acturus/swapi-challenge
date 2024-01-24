import KEYS from '../../shared/IoC/Keys';
import container from "../../shared/IoC/Container";
import {asyncHandler} from "../../shared/helpers";

import {Request, Response, Router} from 'express';
import {validate} from "../../shared/middlewares/validation.middleware";
import {body,query} from "express-validator";
import { ICharacterController } from '../contracts/character.contracts';

const CharacterRoutes = Router();
const character = container.resolve<ICharacterController>(KEYS.ICharacterController);

CharacterRoutes.get('/list', [
    validate([
        query('source').optional({ nullable: true }).isIn(['local', 'swapi']).withMessage('Ingrese una fuente de datos válida')
    ]),
    asyncHandler((req: Request, res: Response) => character.list(req, res))
]);

CharacterRoutes.post('/add', [
    validate([
        body('nombre').isLength({ min:5 }).withMessage('Ingrese un nombre válido'),
        body('color_ojos').isLength({ min:3 }).withMessage('Ingrese un color de ojos válido'),
        body('color_piel').isLength({ min:3 }).withMessage('Ingrese un color de piel válido'),
        body('color_cabello').isLength({ min:3 }).withMessage('Ingrese un color de cabello válido'),
        body('fecha_nacimiento').isLength({ min:4 }).withMessage('Ingrese una fecha según el Calendario Galáctico Estándar'),
        body('estatura').isNumeric().custom(value => parseFloat(value) >= 0).withMessage('Ingrese una estatura válida'),
        body('peso').isNumeric().custom(value => parseFloat(value) >= 0).withMessage('Ingrese un peso válido'),
        body('genero').isIn(['male', 'female', 'n/a']).withMessage('Ingrese un género válido')
    ]),
    asyncHandler((req: Request, res: Response) => character.create(req, res))
]);

export default CharacterRoutes;