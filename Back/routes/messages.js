const router = require("express").Router();
const validationMiddleware = require('../middleware/authenticateToken')
const Message = require('../models/Message')

router.post("/", /* validationMiddleware.authenticateToken, */ async (req, res) => {

  const newMessage = new Message(req.body);

  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    return res.status(500).send({
      error: err
    })
  }
})

router.get("/:conversationId", async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    })
    res.status(200).json(messages);
  } catch (err) {
    return res.status(500).send({
      error: err
    })
  }
})

module.exports = router