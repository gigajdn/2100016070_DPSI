const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemRequestSchema = new Schema({
  itemName: { type: String, required: true },
  itemSpecification: { type: String, required: true },
  quantity: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('ItemRequest', ItemRequestSchema);