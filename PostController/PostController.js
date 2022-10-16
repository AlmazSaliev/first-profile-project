import Apartment from "../models/Apartment.js";

class PostController {
  async create(req, res) {
    try {
      console.log(req.body, "body");
      const {
        projectId,
        floorId,
        roomId,
        status,
        date,
        name,
        phoneNumber,
        price,
      } = req.body;
      //   const apartment = new Apartment({
      //     projectId,
      //     floorId,
      //     roomId,
      //     status,
      //     date,
      //     name,
      //     phoneNumber,
      //     price,
      //   });
      //   await apartment.save();
      await Apartment.create({
        projectId,
        floorId,
        roomId,
        status,
        date,
        name,
        phoneNumber,
        price,
      });
      res.status(201).json({ message: "Успешно добавлено в б.д." });
    } catch (e) {
      res.status(500).json({ message: "Что-то не так, попробуйте снова" });
    }
  }

  async getAll(req, res) {
    try {
      const response = await Apartment.find();
      return res.status(200).json(response);
    } catch (e) {
      res.status(500).json({ message: "Что-то не так, попробуйте снова" });
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ message: "Id не задан" });
      }
      const room = await Apartment.findById(id);
      return res.status(200).json(room);
    } catch (e) {
      res.status(500).json({ message: "Что-то не так, попробуйте снова" });
    }
  }
  async update(req, res) {
    try {
      const id = req.body;
      if (!id._id) {
        return res.status(400).json({ message: "Id не задан" });
      }
      const updateroom = await Apartment.findByIdAndUpdate(id._id, id, {
        new: true,
      });
      return res.status(200).json(updateroom);
    } catch (e) {
      res.status(500).json({ message: "Что-то не так, попробуйте снова" });
    }
  }
  async ondelete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ message: "Id не задан" });
      }
      const deleteroom = await Apartment.findByIdAndDelete(id);
      return res.status(200).json(deleteroom);
    } catch (e) {
      res.status(500).json({ message: "Что-то не так, попробуйте снова" });
    }
  }
}
export default new PostController();
