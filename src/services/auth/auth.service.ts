import jwt from 'jsonwebtoken';

import { WheelsEnvDB } from '../../database/pg.cnn';

import { LoginInfo } from "../../interfaces/auth/credentials.interface";
import { LoginResponse } from "../../interfaces/auth/login-response.interface";
import { Client } from 'pg';


export class AuthService {
    private _jwtKey = 'nOcbmlzGtmfq71Z6YaG0Nt';

    public async login(credentials: LoginInfo): Promise<LoginResponse> {
    
        const dbCnn = await WheelsEnvDB();

        const result = await dbCnn?.query(
            `
            SELECT 
                id, 
                name, 
                "lastName", 
                password, 
                email
            FROM we_users 
            WHERE 
                email='${credentials.email}' 
            AND 
                password = '${credentials.password}'`
        )
        
        .catch(
            error => console.log(error)
        )
        .finally(
            async () => await dbCnn.end()
        );


        if(result?.rows && result?.rows.length  > 0) {
            console.log(result?.rows);
            const token = await this._createJWT(credentials);
            
            return { 
                valid: true ,
                token
            };
        }

        return {valid: false};
    }


    public logout(token: string) {
    
        //TODO: deshabilitar el token desde BD
        


        return { 
            message: 'Se cierra la seccion del usuario'
        };
        
    }

    public canActive(token: string) {
    
        try {
            jwt.decode(token);
            return true;
        }
        catch {
            return false;
        }        
    }

    private async  _createJWT(credentials: LoginInfo) {
        return await jwt.sign(credentials, this._jwtKey)
    }

}
