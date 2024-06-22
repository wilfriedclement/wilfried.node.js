/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 22/06/2024 - 19:58:48
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/06/2024
    * - Author          : Hp
    * - Modification    : 
**/
import { Router } from 'express';
import Controllers from '../controllers/maison.controller';
const router = Router();

router.get('/', Controllers.getAllmaisons);
router.get('/:id', Controllers.getmaisonsById);
router.get('/quartier/:quartier', Controllers.getmaisonsQuartier);

export default router;
