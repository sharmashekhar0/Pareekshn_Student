import React, { useEffect, useState } from "react";
import getPaidExamDetails from "../../actions/Dashboard/getPaidExamDetails";
import applyPromo from "../../actions/Dashboard/applyPromo";
import createPayment from "../../actions/Dashboard/createPayment";
import updatePayment from "../../actions/Dashboard/updatePayment";

function ExamFeeDetails() {
	const [user, setUser] = useState({});
	const [exam, setExam] = useState({});
	const [paymentModal, setPaymentModal] = useState(false);
	const [coupon, setCoupon] = useState("FEB2024-PM");
	const [promoId, setPromoId] = useState(0);
	const [order, setOrder] = useState({});

	const onOpen = () => {
		setPaymentModal(true);
	};

	const onClose = () => {
		setPaymentModal(false);
	};

	const getPaidExamDetailsHandler = async (examId) => {
		try {
			const user = JSON.parse(localStorage.getItem("user"));
			setUser(user);
			console.log(examId);
			console.log(user);
			const data = {
				usercode: user?.usercode,
				id_self_student: user?.id_self_student,
				id_exam: examId,
			};
			const response = await getPaidExamDetails(data);
			console.log(response);
			setExam(response?.data?.exam_detail);
		} catch (error) {
			console.log("Error while getting paid exam details :: ", error);
		}
	};

	const applyPromoHandler = async () => {
		try {
			console.log(user);
			const data = {
				id_self_student: user?.id_self_student,
				usercode: user?.usercode,
				promo: coupon,
				type: 1,
			};
			console.log(data);
			const response = await applyPromo(data);
			if (response?.data?.code !== 1000) {
				console.log("here");
				setCoupon("Invalid Code");
				return;
			}
			console.log(response?.data?.promo?.id);
			setPromoId(response?.data?.promo?.id);
		} catch (error) {
			console.log("Error while applying promo :: ", error);
		}
	};

	const createPaymentHandler = async () => {
		try {
			const data = {
				generic_type: 0,
				id_self_student: user?.id_self_student,
				usercode: user?.usercode,
				id_hack: 0,
				id_exam: exam?.id_exam,
				id_promo: promoId,
			};
			console.log(data);
			const response = await createPayment(data);
			console.log(response);
			console.log(response?.data?.payment_detail);
			setOrder(response?.data?.payment_detail);
			updatePaymentHandler(response?.data?.payment_detail);
		} catch (error) {
			console.log("Error while creating payment :: ", error);
		}
	};

	const updatePaymentHandler = async (order) => {
		try {
			const data = {
				id_student_payments: order?.id_student_payments,
				generic_type: 0,
				id_self_student: user?.id_self_student,
				id_hack: 0,
				id_exam: exam?.id_exam,
				usercode: user?.usercode,
				razorpay_payment_id: order?.razorpay_payment_id,
			};
			console.log(data);
			const response = await updatePayment(data);
			console.log(response);
		} catch (error) {
			console.log("Error while updating payment :: ", error);
		}
	};

	useEffect(() => {
		const url = window?.location?.href;
		const examId = url?.split("/")?.pop();
		getPaidExamDetailsHandler(examId);
	}, []);

	return (
		<div className="flex flex-col font-custom">
			<div className="flex flex-col m-4 p-4 rounded-xl gap-6 bg-white ">
				<span className="text-xl font-semibold text-[#1C4481]">
					Exam Detail
				</span>
				<div className="flex justify-between ">
					<div className="flex flex-col">
						<span className="font-medium tex-sm text-[#1C4481]">
							Exam
						</span>
						<span>{exam?.exam_name}</span>
					</div>
					<div className="flex flex-col">
						<span className="font-medium tex-sm text-[#1C4481]">
							Sector
						</span>
						<span>{exam?.sector}</span>
					</div>
					<div className="flex flex-col">
						<span className="font-medium tex-sm text-[#1C4481]">
							Qualification Pack
						</span>
						<span>PQP1</span>
					</div>
					<div className="flex flex-col">
						<span className="font-medium tex-sm text-[#1C4481]">
							Qualification Code
						</span>
						<span>PQP/01</span>
					</div>
					<div className="flex flex-col">
						<span className="font-medium tex-sm text-[#1C4481]">
							Exam Duration
						</span>
						<span>{exam?.duration} Min</span>
					</div>
				</div>
			</div>
			<div className="bg-white m-4 rounded-xl">
				<div className="flex justify-between pr-14 px-4 pt-4">
					<div className="flex flex-col gap-4">
						<span className="text-xl font-medium text-[#1C4481]">
							Exam Fee
						</span>
						<span className="font-medium text-xl">
							{exam?.exam_fee?.exam_fee}
						</span>
					</div>
					<div className="flex flex-col gap-4">
						<span className="text-xl font-medium text-[#1C4481]">
							Use Coupon
						</span>
						<div>
							<div className="flex gap-4 items-center">
								<input
									className="flex items-center justify-center bg-[#1C44811A] h-9 w-44 rounded-md shadow-customShadow text-[#33363F8F] outline-none px-4"
									placeholder="Coupon Code"
									value={coupon}
									onChange={(e) => setCoupon(e.target.value)}
								/>
								<div
									className="h-9 w-24 bg-[#1C4481] rounded-full flex items-center justify-center cursor-pointer text-white"
									onClick={applyPromoHandler}
								>
									<span>Apply</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="border-t-[1px] mx-4 h-1 my-2 mt-4 border-black"></div>
				<div className="flex flex-col gap-3">
					<span className="text-[#1C4481] px-4 font-medium text-xl">
						Tax
					</span>
					<div className="flex flex-col gap-2">
						{exam?.tax?.map((tax) => (
							<div className="flex justify-between w-3/4 pr-[110px] text-xl font-medium bg-[#CFDFF8] p-2 mx-2 mb-4 rounded-md">
								<span>{tax.tax_name}</span>
								<span>{tax.tax_value}</span>
							</div>
						))}
					</div>
					<div className="flex justify-between w-3/4 pr-[110px] text-xl font-medium bg-[#CFDFF8] p-2 mx-2 mb-4 rounded-md">
						<span>Total</span>
						<span>100</span>
					</div>
				</div>
			</div>
			<div className="flex flex-col m-4">
				<span className="text-[#1C4481] font-semibold">
					Cancellation Policy
				</span>
				{exam && (
					<span className="text-sm">{exam?.cancellation_policy}</span>
				)}
			</div>
			<div className="h-fit mx-4 bg-white rounded-3xl border-t border-[#1C4481] border-b my-8">
				<div className="w-2/3 p-8 flex flex-col gap-4 text-xl text-[#1C4481] font-semibold">
					<div className="flex justify-between">
						<span>Exam Fee</span>
						<span>₹ 100</span>
					</div>
					<div className="flex justify-between">
						<span>Discount</span>
						<span>₹ 0</span>
					</div>
					<div className="flex justify-between">
						<span>GST</span>
						<span>₹ 18</span>
					</div>
					<hr className="border-1 border-neutral-500" />
					<div className="flex justify-between font-bold bg-[#CFDFF8] px-4 py-2 rounded-lg">
						<span>Total</span>
						<span>₹ 100</span>
					</div>
				</div>
			</div>
			<div
				className="flex justify-center items-center h-40"
				onClick={createPaymentHandler}
			>
				<div
					className="h-16 flex items-center justify-center text-xl bg-[#1C4481] w-1/5 rounded-[50px] font-semibold text-white cursor-pointer"
					onClick={onOpen}
				>
					<span>Pay Now</span>
				</div>
			</div>
			{paymentModal && (
				<div className="flex items-center justify-center h-screen w-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed bg-[#1c4481ad]">
					<div className="h-2/3 w-2/5 flex items-center justify-center rounded-3xl opacity-100 bg-white z-[10]">
						<div className="flex flex-col items-center justify-between h-1/2">
							<span className="font-semibold text-xl text-[#1C4481]">
								Cancel payment
							</span>
							<div className="flex flex-col items-center">
								<span>Your payment is ongoing.</span>
								<span>
									Are you sure you want to cancel the payment?
								</span>
							</div>
							<div className=" flex justify-between w-full gap-8">
								<div
									className="h-12 w-full bg-[#1C4481] flex items-center justify-center rounded-full cursor-pointer"
									onClick={onClose}
								>
									<span className="text-white">Yes</span>
								</div>
								<div
									className="h-12 w-full flex items-center justify-center rounded-full border-2 border-[#e61a1a] cursor-pointer"
									onClick={onClose}
								>
									<span className="text-[#1C4481]">No</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default ExamFeeDetails;
