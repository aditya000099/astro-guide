import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import Header from "../components/Header";

const BookSession = () => {
//   const apiUrl = "http://localhost:8080";
  // const apiUrl = "https://astroai-beige.vercel.app";
  const apiUrl = "https://astroaibackend.onrender.com";
  const astrologers = [
    {
      name: "Rushkof",
      experience: 10, // years
      price: 2000, // in cents, so $20.00
      availability: "Available",
    },
    {
      name: "Samantha",
      experience: 8,
      price: 2500, // $25.00
      availability: "Busy",
    },
    {
      name: "Zara",
      experience: 15,
      price: 3000, // $30.00
      availability: "Available",
    },
  ];
  
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51NMGiaSCsl6IpzULKI77ipMcGM60JiEDCNB32Qa068KsirMb5HLmrTNJsKdHldtMmCmL5tQYwbL4QQPIkM65eM1u00NFnqNTfi"
    );
    const products = astrologers;
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(`${apiUrl}/create-checkout-session`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(products),
    });
    const session = await response.json();
    const result = stripe.redirectToCheckout({ sessionId: session.id });
  };

  const AstrologerCard = ({ astrologer, makePayment }) => {
    return (
      <div className="border p-8 rounded-lg shadow-md bg-white text-black max-w-sm mx-auto">
        <h2 className="text-xl font-bold">{astrologer.name}</h2>
        <p className="text-gray-700">Experience: {astrologer.experience} years</p>
        <p className="text-gray-700">Price: ${(astrologer.price / 100).toFixed(2)}</p>
        <p className={`text-${astrologer.availability === 'Available' ? 'green' : 'red'}-500`}>
          Availability: {astrologer.availability}
        </p>
        <button
          onClick={() => makePayment(astrologer)}
          className="mt-4 bg-lime-300 text-black text-xl px-4 py-2 rounded hover:bg-;ime-600"
        >
          Make Payment
        </button>
      </div>
    );
  };

  //   const service = [{ name: "AstroGuide", price: "100" }];
  return (
    <>
    {/* <Header className="fixed top-0"/> */}
    <div className="flex flex-col justify-center items-center w-screen">
    <h1 className="p-10 font-black text-6xl">Book Consultation</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {astrologers.map((astrologer, index) => (
        <AstrologerCard key={index} astrologer={astrologer} makePayment={makePayment} />
      ))}
    </div>
    </div>
    </>
  );
};

export default BookSession;
