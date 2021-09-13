const router = require("express").Router();
const validationMiddleware = require('../middleware/authenticateToken')
const Conversation = require('../models/Conversation')

//New conversation
router.post("/", /* validationMiddleware.authenticateToken, */ async (req, res) => {

  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.reciverId]
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    return res.status(500).send({
      error: err
    })
  }
})

router.get("/", validationMiddleware.authenticateToken, async (req, res) => {
  try {
    const userId = req.id;
    const conversations = await Conversation.find({
      members: { $in: [userId] }
    })
    res.status(200).json(conversations);
  } catch (err) {
    return res.status(500).send({
      error: err
    })
  }
})

module.exports = router