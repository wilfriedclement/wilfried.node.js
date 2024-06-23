/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 23/06/2024 - 18:40:13
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 23/06/2024
    * - Author          : Hp
    * - Modification    : 
**/
// src/app.ts

import { envs } from './core/config/env';
import app from './server';

// app.get('/', (_req, res) => {
// 	res.send({
// 		message: `Test done well !`
// 	});
// });

app.listen(envs.PORT, () => {
	console.log(`Server running on port http://localhost:${envs.PORT}/`);
});
