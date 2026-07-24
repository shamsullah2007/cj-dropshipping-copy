import { useState } from "react";
import { ArrowLeft, CreditCard, Wallet, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link, useLocation } from "wouter";
import { CheckoutProgress } from "@/components/checkout/CheckoutProgress";
import { OrderSummary, SHIPPING_OPTIONS } from "@/components/checkout/OrderSummary";

const SAVED_CARDS = [
  { id: "card1", brand: "Visa", last4: "4242", expiry: "08/26", name: "John Smith" },
  { id: "card2", brand: "Mastercard", last4: "5555", expiry: "12/27", name: "John Smith" },
];

const WALLET_BALANCE = 32.5;

function getStoredShipping() {
  try {
    const s = sessionStorage.getItem("cj_shipping");
    return s ? JSON.parse(s) : SHIPPING_OPTIONS[0];
  } catch {
    return SHIPPING_OPTIONS[0];
  }
}

export default function CheckoutPayment() {
  const [, setLocation] = useLocation();
  const storedShipping = getStoredShipping();
  const shippingCost: number = storedShipping?.price ?? 2.5;

  const [paymentMode, setPaymentMode] = useState<"saved" | "new" | "wallet">("saved");
  const [selectedCard, setSelectedCard] = useState("card1");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [newCard, setNewCard] = useState({
    number: "", expiry: "", cvv: "", name: "",
  });

  function formatCardNumber(val: string) {
    return val.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
  }

  function formatExpiry(val: string) {
    const digits = val.replace(/\D/g, "").slice(0, 4);
    if (digits.length >= 3) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    return digits;
  }

  function validate() {
    const errs: Record<string, string> = {};
    if (paymentMode === "new") {
      if (!newCard.number || newCard.number.replace(/\s/g, "").length < 16) errs.number = "Valid card number required";
      if (!newCard.expiry || newCard.expiry.length < 5) errs.expiry = "Valid expiry required";
      if (!newCard.cvv || newCard.cvv.length < 3) errs.cvv = "CVV required";
      if (!newCard.name.trim()) errs.name = "Cardholder name required";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handlePlaceOrder() {
    if (!validate()) return;

    let paymentSummary;
    if (paymentMode === "wallet") {
      paymentSummary = { type: "wallet", label: `CJ Wallet (Balance: $${WALLET_BALANCE.toFixed(2)})` };
    } else if (paymentMode === "saved") {
      const card = SAVED_CARDS.find((c) => c.id === selectedCard)!;
      paymentSummary = { type: "card", label: `${card.brand} ending in ${card.last4}` };
    } else {
      paymentSummary = { type: "card", label: `New card ending in ${newCard.number.replace(/\s/g, "").slice(-4)}` };
    }

    sessionStorage.setItem("cj_payment", JSON.stringify(paymentSummary));
    sessionStorage.setItem("cj_order_number", `CJ${Date.now().toString().slice(-8)}`);
    setLocation("/checkout/confirmation");
  }

  const brandBg: Record<string, string> = { Visa: "bg-blue-800", Mastercard: "bg-red-600" };

  return (
    <div className="min-h-screen bg-[#f5f6f8] font-sans text-slate-800 flex flex-col">
      <Header />

      <main className="max-w-[1400px] mx-auto px-4 py-8 flex-1 w-full">
        <CheckoutProgress currentStep={3} />

        <h1 className="text-2xl font-bold text-gray-900 mb-6">Payment</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1 space-y-6">

            {/* Payment Method */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-orange-500" />
                Payment Method
              </h2>

              {/* Mode Tabs */}
              <div className="flex gap-2 mb-5 flex-wrap">
                {[
                  { id: "saved", label: "Saved Cards" },
                  { id: "new", label: "New Card" },
                  { id: "wallet", label: `CJ Wallet ($${WALLET_BALANCE.toFixed(2)})` },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setPaymentMode(tab.id as typeof paymentMode)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                      paymentMode === tab.id
                        ? "bg-orange-500 text-white border-orange-500"
                        : "bg-white text-gray-600 border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    {tab.id === "wallet" && <Wallet className="w-3.5 h-3.5 inline mr-1.5" />}
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Saved Cards */}
              {paymentMode === "saved" && (
                <RadioGroup value={selectedCard} onValueChange={setSelectedCard} className="gap-3">
                  {SAVED_CARDS.map((card) => (
                    <div
                      key={card.id}
                      className="flex items-center gap-3 border border-gray-200 p-4 rounded-lg hover:border-orange-300 transition-colors [&:has([data-state=checked])]:border-orange-500 [&:has([data-state=checked])]:bg-orange-50/30 cursor-pointer"
                    >
                      <RadioGroupItem
                        value={card.id}
                        id={card.id}
                        className="border-gray-300 data-[state=checked]:border-orange-500 text-orange-500"
                      />
                      <Label htmlFor={card.id} className="cursor-pointer flex items-center gap-3 flex-1">
                        <div className={`h-8 w-12 ${brandBg[card.brand] ?? "bg-gray-600"} rounded flex items-center justify-center text-white text-[9px] font-bold`}>
                          {card.brand.toUpperCase().slice(0, 4)}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">{card.brand} •••• {card.last4}</div>
                          <div className="text-xs text-gray-500">Expires {card.expiry} · {card.name}</div>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}

              {/* New Card Form */}
              {paymentMode === "new" && (
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="cardName">Cardholder Name *</Label>
                    <Input
                      id="cardName"
                      placeholder="John Smith"
                      value={newCard.name}
                      onChange={(e) => setNewCard((c) => ({ ...c, name: e.target.value }))}
                      className={`h-11 ${errors.name ? "border-red-400" : ""}`}
                    />
                    {errors.name && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="cardNumber">Card Number *</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={newCard.number}
                      onChange={(e) => setNewCard((c) => ({ ...c, number: formatCardNumber(e.target.value) }))}
                      className={`h-11 ${errors.number ? "border-red-400" : ""}`}
                    />
                    {errors.number && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.number}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="expiry">Expiry Date *</Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        value={newCard.expiry}
                        onChange={(e) => setNewCard((c) => ({ ...c, expiry: formatExpiry(e.target.value) }))}
                        className={`h-11 ${errors.expiry ? "border-red-400" : ""}`}
                      />
                      {errors.expiry && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.expiry}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input
                        id="cvv"
                        placeholder="•••"
                        maxLength={4}
                        value={newCard.cvv}
                        onChange={(e) => setNewCard((c) => ({ ...c, cvv: e.target.value.replace(/\D/g, "") }))}
                        className={`h-11 ${errors.cvv ? "border-red-400" : ""}`}
                      />
                      {errors.cvv && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.cvv}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Wallet */}
              {paymentMode === "wallet" && (
                <div className="border border-orange-200 bg-orange-50/30 rounded-lg p-4 flex items-center gap-4">
                  <Wallet className="w-8 h-8 text-orange-500 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-800">CJ Wallet Balance</div>
                    <div className="text-2xl font-bold text-orange-500 mt-0.5">${WALLET_BALANCE.toFixed(2)}</div>
                    <div className="text-xs text-gray-500 mt-1">Your wallet balance will be used to pay for this order.</div>
                  </div>
                </div>
              )}
            </div>

            {/* Desktop navigation */}
            <div className="hidden sm:flex items-center justify-between">
              <Link href="/checkout/shipping">
                <Button variant="outline" className="border-gray-300 text-gray-600 hover:border-orange-400 hover:text-orange-500 flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" /> Back to Shipping
                </Button>
              </Link>
              <Button
                onClick={handlePlaceOrder}
                className="bg-orange-500 hover:bg-orange-600 text-white h-12 px-8 font-bold shadow-md shadow-orange-500/20"
              >
                Place Order
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <OrderSummary shippingCost={shippingCost} showTax showItems />
        </div>
      </main>

      {/* Mobile sticky footer */}
      <div className="sm:hidden sticky bottom-0 bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-2 z-40 shadow-lg">
        <Button
          onClick={handlePlaceOrder}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 font-bold shadow-md shadow-orange-500/20"
        >
          Place Order
        </Button>
        <Link href="/checkout/shipping">
          <Button variant="ghost" className="w-full text-gray-500 text-sm h-9">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Shipping
          </Button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
