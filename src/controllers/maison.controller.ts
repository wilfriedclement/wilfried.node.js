/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 22/06/2024 - 20:02:11
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/06/2024
    * - Author          : Hp
    * - Modification    : 
**/
import { Request, Response } from 'express';
import { HttpCode } from '../core/constants';
import maisons from '../core/constants/maisons';

const Controllers = {
	getAllmaisons: (req: Request, res: Response): void => {
		res.send(maisons).status(HttpCode.OK);
	},

	getmaisonsById: (req: Request, res: Response): void => {
		const maisonsId = req.params.id;
		maisons.find((el) => {
			if (el.id === maisonsId) {
				res.send(el).status(HttpCode.OK);
			} else {
				res.send({ msg: "L'objet demandé n'existe pas " }).status(HttpCode.NOT_FOUND);
			}
		});
	},
	getmaisonsQuartier: (req: Request, res: Response): void => {
		const maisonsQuartier = req.params.quartier;
		const lesmaisons = maisons.filter((el) => el.quartier === maisonsQuartier);
		if (lesmaisons) {
			res.send(lesmaisons).status(HttpCode.OK);
		}
	}
};

export default Controllers;