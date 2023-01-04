const { Service: ServiceModel } = require('../models/Service');

const serviceController = {

    create: async(req, res) => {
      try {
        
        const service = {
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          image: req.body.image
        };

        const result = await ServiceModel.create(service);

        res.status(201).json({result, msg: "Create service!"})

      } catch (error) {
        console.log(error)
      };
    },

    getAll: async (req, res) => {
      try {
        const services = await ServiceModel.find();
  
        res.json(services);
        
      } catch (error) {
        console.log(error)
      };
    },

    get: async(req, res) => {
      try {
        const id = req.params.id
        const service = await ServiceModel.findById(id);

        if (!service) {
          res.status(404).json({msg: "Id not found!"});
          return
        }

        res.json(service)
      } catch (error) {
        console.log(error)
      };
    },

    delete: async(req, res) => {
      try {
        const id = req.params.id

        const service = await ServiceModel.findById(id);

        if (!service) {
          res.status(404).json({msg: "Id not found!"});
          return
        };

        const deletedService = await ServiceModel.findByIdAndDelete(id);

        res.status(200).json({deletedService, msg: "Service is deleted"})

      } catch (error) {
        console.log(error)
      };
    },

    update: async (req, res) => {
      const id = req.params.id;

      const service = {
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          image: req.body.image
      };

      const updatedService = await ServiceModel.findByIdAndUpdate(id, service)

      if (!updatedService) {
        res.status(404).json({msg: "Id not found!"});
        return
      };

      res.status(200).json({service, msg: "Service is updated"})
    }
}

module.exports = serviceController