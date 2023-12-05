import { Request, Response } from 'express';
import { AuthService } from '../../services/auth/auth.service';
import { LoginResponse } from '../../interfaces/auth/login-response.interface';


const authSrv = new AuthService();


const login = async (req: Request, res: Response) => {

	try {
		const result: LoginResponse = await authSrv.login(req.body);

		if (result.valid) {
			return res.json(result);
		}

		return res.status(401).json({ error: 'Usuario Invalido', status: res.statusCode });
	}
	catch (err: any) {
		return res.status(500).json({ error: err.message });
	}
}

const logout = (req: Request, res: Response) => {
	
	try {
		const result = authSrv.logout(req.body.token);
		return res.json(result);
	}
	catch (err: any) {
		return res.status(500).json({ error: err.message });
	}
}


const canActive = (req: Request, res: Response) => {
	
	try {
		const result = authSrv.canActive(req.body.token);
		return res.json(result);
	}
	catch (err: any) {
		return res.status(500).json({ error: err.message });
	}
}

export {
	login,
	logout,
	canActive
}
