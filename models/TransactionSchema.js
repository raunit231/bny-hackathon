import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
	{
		clientName: {
			type: String,
			required: true,
			min: 2,
			max: 100,
		},
		bankName: {
			type: String,
			required: true,
			min: 2,
			max: 100,
		},
		accountNumber: {
			type: String,
			required: true,
			max: 20,
			unique: false,
		},
		transactionDate: {
			type: String,
			required: true,
			min: 0,
		},
		transactionType: {
			type: String,
			default: "",
		},
		description: {
			type: String,
			default: "",
		},
		amount: {
			type: Number,
			default: 0,
		},
		balance: {
			type: Number,
			default: 0,
		},
		anomaly: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const TransactionData = mongoose.model("TransactionData", transactionSchema);
export default TransactionData;
