const Yup = require("yup")
const Provider = require("../Models/Provider")

class ProviderController {
    
    async createProvider(req, res){

        const schema = Yup.object().shape({
            id: Yup.string().required().max(17),
            name: Yup.string().required(),
            company: Yup.string().required(), 
            createat: Yup.string().required(), 
            amountproducts: Yup.string().required()
        });

        if(!(await schema.isValid(req.body))){
            res.status(402).json({
                error: true,
                message: "Invalid registration of schema"
            });
        }

        const {id, name, company, createat, amountproducts} = req.body
        
        const data = {
            id, 
            name, 
            company, 
            createat, 
            amountproducts
        }

        const provider = await Provider.create(data, (error) => {
            if(error) {
                res.status(402).json({
                    error: true,
                    message: "Invalid registration"
                });
            }
            return res.status(200).json({
                error: false,
                message: "Sucess"
            })
        });
    }

    async read(req, res){
        const docs = await Provider.find() 
        if(docs == null) {
            res.status(402).json({
                error: true,
                message: "Invalid reading"
            });
        }
        return res.status(200).json({
            message: docs
        })

    }
}



module.exports = new ProviderController()