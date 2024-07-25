const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuctionSchema = new Schema({
  item: { type: String, required: true },
  highestBid: { type: Number, default: 0 },
  status: { type: String, enum: ['open', 'closed', 'canceled'], default:"open", required: true },
  participants: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Auction', AuctionSchema);
