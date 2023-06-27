import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import React from "react";
import theme from "./config/theme/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
      </BrowserRouter>
    </ChakraProvider>
  // </React.StrictMode>
);

reportWebVitals();

// import paymentsSchema from '~/repository/schemas/payments.schema';
// import PaymentsSchema from '~/repository/schemas/payments.schema';
// import Payments from '~/repository/schemas/payments.schema';

// type payments = {
//     payments: string;
//     references: string;
//     date?: string;
//     amount?: string;
//     mode: string;
//     unusedamount?: string;
//     createdAt?: string;
//     updatedAt?: string;
//     deletedAt?: string;
// }

// export async function createPayment(data: payments) {
//     try {
//         if (!data) {
//             throw new Error('Data is required');
//         }
//         const payments = Payments.create(new Payments(data))
//         if (!payments) {
//             throw new Error('Template creation failed');
//         }
//         console.log(payments);
//         // const payment_id = (await Payments)._id;
//         return payments;
//     } catch (error) {
//         throw new Error(error);
//     }
// }

// export async function getPayments() {
//   const pipeline = [
//     {
//       $match: {
//         status: { $in: ["pending", "billing"] }
//       }
//     },
//     {
//       $group: {
//         _id: "$status",
//         totalAmount: { $sum: { $toDouble: "$amount" } },
//         count: { $sum: 1 }
//       }
//     },
//     {
//       $project: {
//         _id: 0,
//         status: "$_id",
//         totalAmount: 1,
//         count : 1

//       }
//     }
//   ];
//       const paymnt = await Payments.aggregate(pipeline);
//       console.log(paymnt)
//       return paymnt;
// }