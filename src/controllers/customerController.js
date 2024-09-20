import {getAllCustomers} from '../services/customerService.js';

export const  getCustomer = async(req, res) => {
    try{
        const customer = await getAllCustomers();
        res.jason(customer)
    }
    catch (error) {
        res.status(500).json({
            error: "Erro ao Buscar customer",
        });
    }
}