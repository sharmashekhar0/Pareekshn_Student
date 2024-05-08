import React from "react";

function ExamFeeDetails() {
	return (
		<div className="flex flex-col">
			<div className="flex flex-col m-4 p-4 rounded-xl gap-6 bg-white ">
				<span className="text-xl font-semibold text-[#1C4481]">
					Exam Detail
				</span>
				<div className="flex justify-between ">
					<div className="flex flex-col">
						<span className="font-medium tex-sm text-[#1C4481]">
							Exam
						</span>
						<span>Exam-Test-2</span>
					</div>
					<div className="flex flex-col">
						<span className="font-medium tex-sm text-[#1C4481]">
							Sector
						</span>
						<span>Paid Sector</span>
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
						<span>15 Min</span>
					</div>
				</div>
			</div>
			<div className="bg-white m-4 rounded-xl">
				<div className="flex justify-between pr-14 px-4 pt-4">
					<div className="flex flex-col gap-4">
						<span className="text-xl font-medium text-[#1C4481]">
							Exam Fee
						</span>
						<span className="font-medium text-xl">100</span>
					</div>
					<div className="flex flex-col gap-4">
						<span className="text-xl font-medium text-[#1C4481]">
							Use Coupon
						</span>
						<div>
							<div className="flex gap-4 items-center">
								<div className="flex items-center justify-center bg-[#1C44811A] h-9 w-44 rounded-md shadow-customShadow text-[#33363F8F]">
									<span>Coupon Code</span>
								</div>
								<div className="h-9 w-24 bg-[#1C4481] rounded-full flex items-center justify-center text-white">
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
						<div className="flex justify-between w-2/3 text-xl font-medium px-4">
							<span>GST</span>
							<span>18</span>
						</div>
						<div className="flex justify-between w-3/4 pr-[110px] text-xl font-medium bg-[#CFDFF8] p-2 mx-2 mb-4 rounded-md">
							<span>Total</span>
							<span>18</span>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col m-4">
				<span className="text-[#1C4481] font-semibold">
					Cancellation Policy
				</span>
				<span className="text-sm">
					Cancellation will not be a part of enrolled/attempted exam.
					Refund can be process in some cases. You can apply for
					refund within 2 days.
				</span>
			</div>
		</div>
	);
}

export default ExamFeeDetails;
