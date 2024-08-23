import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const BookSession = () => {
  const apiUrl = "http://localhost:8080";
  const service = [
    {
      name: "Astro Guide Meeting",
      price: 2000, // in cents, so $20.00
    }
  ];
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51NMGiaSCsl6IpzULKI77ipMcGM60JiEDCNB32Qa068KsirMb5HLmrTNJsKdHldtMmCmL5tQYwbL4QQPIkM65eM1u00NFnqNTfi"
    );
    const products = service;
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

  //   const service = [{ name: "AstroGuide", price: "100" }];
  return (
    <div>
      <button onClick={makePayment} className="bg-white text-black text-2xl">
        Make Payment
      </button>
    </div>
  );
};

export default BookSession;
