import jwt from 'jsonwebtoken';

import { CompanyInfo } from '../interfaces/company-info.interface';


export class CompanyInfoService {

    public async infoCompany(): Promise<CompanyInfo[]> {

        //TODO: Realizar conexion a la BD y consultar la informacion de la compañia
        return [
            {
                title: '¿QUIENES SOMOS?',
                image: 'whoWeAre.jpg',
                link: '',
                desccription: 'Estoy siendo llamado desde el back 😜😜😜😜😜'
            },
            {
                title: 'ACERCA DE NOSOTROS',
                image: 'about.jpg',
                link: '',
                desccription: ' siiiiiiiiiuuuu fugit voluptatem obcaecati non earum nulla excepturi.'
            },
            {
                title: '¿TIENES PROBLEMAS?',
                image: 'anyProblem.jpg',
                link: '',
                desccription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repellat iusto aut adipisci iste, maxime, natus facere placeat harum atque odio debitis nisi fugit voluptatem obcaecati non earum nulla excepturi.'
            }
        ];
    }
}
