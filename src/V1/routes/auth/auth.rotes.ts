import { Router } from 'express';
import { canActive, login, logout } from '../../../controllers/auth/auth.controller';

const authRoutes = Router();

const apiName = '/auth';

authRoutes.post(`${apiName}/login`, login);
authRoutes.post(`${apiName}/logout`, logout);
authRoutes.post(`${apiName}/can-active`, canActive);

export { authRoutes };
