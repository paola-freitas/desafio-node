const Yup = require("yup");
const Provider = require('../Models/Provider')

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
                message: 'Invalid registration in schema'
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
        try {
            const provider = await Provider.create(data, (error) => {
                if(error) {
                    res.status(402).json({
                        error: true,
                        message: 'Invalid registration'
                    });
                } else{
                    return res.status(200).json({
                        message: 'Sucess'
                    })
                }
            });
        } catch (error) {
            res.status(500).json({ 
                error: error 
            })
        }
    }

    async readProviders(req, res){
        try {
            const docs = await Provider.find() 
            if(!docs) {
                res.status(402).json({
                    error: true,
                    message: 'Invalid reading'
                });
            } else {
                return res.status(200).json({
                    message: 'Sucess',
                    providers: docs
                })
            }
        } catch (error) {
            res.status(500).json({ 
                error: error 
            })
        }
    }

    async updateProviders(req, res){

        const {newId} = req.params

        const { name, company, createat, amountproducts } = req.body

        const data = {
            name, 
            company, 
            createat, 
            amountproducts
        }

        try {
            const updateProvidersById = await Provider.updateOne({id: newId }, data)

            if (updateProvidersById.matchedCount === 0) {
                res.status(422).json({ 
                    error: true,
                    message: 'Provider not exists'
                })
                return
            } else {
                return res.status(200).json({
                message: 'Sucess'
                })
            }
        } catch (error) {
            res.status(500).json({ 
                error: error 
            })
        }
    }

    async deleteProviders(req, res){

        const {id} = req.params

        const provider = await Provider.findOne({ id: id })

        if (!provider) {
            res.status(422).json({ 
                message: 'Provider not exists' 
            })
        }

        console.log(id)


        try {
            await Provider.deleteOne({id: id })
            res.status(200).json({
                message: 'Sucess'
            })
        } catch (error) {
            res.status(500).json({ 
                error: error 
            })
        }

    }
}

module.exports = new ProviderController()