import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import TransactionData from "../models/TransactionSchema.js";

export const uploadData = async (req, res) => {
	try {
		const data = req.body;
    let flag = false;
      data.vals.forEach(async (transaction) => {
          const {
						client_name: clientName,
						bank_name: bankName,
						Acc_no: accountNumber,
						Transaction_Date: transactionDate,
						"credit/debit": transactionType,
						description,
						amount,
						balance,
						anomaly: isAnomalous,
					} = {
						...transaction,
						anomaly: transaction.anomaly === "normal" ? false : true,
					};
          // console.log(transactionType);
          const newTransaction = new TransactionData({
						clientName,
						bankName,
						accountNumber,
						transactionDate,
						transactionType,
						description,
						amount,
						balance,
            isAnomalous,
					});
          const savedTransaction = await newTransaction.save();
			});
    res.status(201).json({ "status": "success" });

	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const updateAnomaly = async (req, res) => {
	try {
		const { anomaly } = req.body;
		const { id } = req.params;
    // console.log(req.body, id);
		const updatedTask = await TransactionData.findByIdAndUpdate(
			id,
			{
				anomaly: anomaly,
			},
			{ new: true }
		);

		res.status(200).json(updatedTask);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

export const getTransaction = async (req, res) => {
	try {
		// const id = new mongoose.Types.ObjectId(userId);
		const tasklist = await TransactionData.find({});
		res.status(200).json(tasklist);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
