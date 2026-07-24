import { useState } from "react";
import { ChevronDown, ChevronUp, ShieldCheck, CreditCard } from "lucide-react";

export const CART_ITEMS = [
  {
    name: "TWS True Wireless Bluetooth Earbuds Smart Touch Control Waterproof",
    sku: "CJ-EB-001",
    variant: "White",
    price: 10.5,
    qty: 2,
    subtotal: 21.0,
    img: "/images/prod-earbuds.png",
  },
  {
    name: "Modern LED Desk Lamp with Wireless Charger Touch Control Table Lamp",
    sku: "CJ-LM-042",
    variant: "Black",
    price: 8.2,
    qty: 1,
    subtotal: 8.2,
    img: "/images/prod-lamp.png",
  },
  {
    name: "Silicone Smartphone Case Set (10pcs) Drop Protection",
    sku: "CJ-PC-10X",
    variant: "Mixed Colors / iPhone 14 Pro",
    price: 15.0,
    qty: 3,
    subtotal: 45.0,
    img: "/images/prod-cases.png",
  },
];

export const SUBTOTAL = 74.2;
export const TAX = 5.57;

export const SHIPPING_OPTIONS = [
  { id: "standard", name: "CJPacket Ordinary", delivery: "12–18 days", price: 2.5 },
  { id: "expedited", name: "CJPacket Fast Line", delivery: "5–8 days", price: 8.9 },
  { id: "express", name: "DHL/FedEx Express", delivery: "2–4 days", price: 18.0 },
];

interface OrderSummaryProps {
  shippingCost: number;
  showTax?: boolean;
  showItems?: boolean;
}

export function OrderSummary({ shippingCost, showTax = false, showItems = false }: OrderSummaryProps) {
  const [open, setOpen] = useState(false);
  const total = SUBTOTAL + shippingCost + (showTax ? TAX : 0);

  return (
    <div className="w-full lg:w-[380px] flex-shrink-0">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:sticky lg:top-24">
        {/* Mobile toggle */}
        <button
          className="w-full flex items-center justify-between lg:cursor-default lg:pointer-events-none"
          onClick={() => setOpen((v) => !v)}
        >
          <h2 className="text-lg font-bold text-gray-900">
            Order Summary
            <span className="text-sm font-normal text-gray-500 ml-2">({CART_ITEMS.length} items)</span>
          </h2>
          <span className="lg:hidden text-orange-500 font-bold text-base">
            ${total.toFixed(2)}
            {open ? <ChevronUp className="w-4 h-4 inline ml-1" /> : <ChevronDown className="w-4 h-4 inline ml-1" />}
          </span>
        </button>

        <div className={`${open ? "block" : "hidden"} lg:block`}>
          {/* Items list */}
          {showItems && (
            <div className="mt-4 pb-4 border-b border-gray-100 space-y-3">
              {CART_ITEMS.map((item) => (
                <div key={item.sku} className="flex gap-3 items-start">
                  <div className="w-14 h-14 bg-gray-50 rounded border border-gray-100 flex-shrink-0 overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-contain mix-blend-multiply p-1" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-800 line-clamp-2">{item.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">Qty: {item.qty} · {item.variant}</p>
                  </div>
                  <span className="text-xs font-bold text-gray-900 flex-shrink-0">${item.subtotal.toFixed(2)}</span>
                </div>
              ))}
            </div>
          )}

          <div className={`space-y-3 text-sm ${showItems ? "mt-4" : "mt-4 pt-4 border-t border-gray-100"}`}>
            <div className="flex justify-between text-gray-600">
              <span>Subtotal (3 items)</span>
              <span className="font-medium text-gray-900">${SUBTOTAL.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className="font-medium text-gray-900">
                {shippingCost === 0 ? (
                  <span className="text-gray-400 italic">TBD</span>
                ) : (
                  `$${shippingCost.toFixed(2)}`
                )}
              </span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Discount</span>
              <span className="font-medium text-green-600">-$0.00</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax</span>
              {showTax ? (
                <span className="font-medium text-gray-900">${TAX.toFixed(2)}</span>
              ) : (
                <span className="text-gray-400 italic">Calculated at checkout</span>
              )}
            </div>
          </div>

          <div className="pt-4 mt-3 border-t border-gray-100 flex justify-between items-center">
            <span className="font-bold text-gray-900">Total</span>
            <span className="text-2xl font-bold text-orange-500">${total.toFixed(2)}</span>
          </div>

          <div className="bg-gray-50 rounded-lg p-3 mt-4">
            <div className="flex justify-center items-center gap-3 mb-2">
              <CreditCard className="w-6 h-6 text-slate-700" />
              <span className="text-sm font-medium text-slate-700">Secure Payment Options</span>
            </div>
            <div className="flex justify-center gap-2 opacity-70 grayscale">
              <div className="h-6 w-10 bg-blue-800 rounded flex items-center justify-center text-white text-[8px] font-bold">VISA</div>
              <div className="h-6 w-10 bg-red-600 rounded flex items-center justify-center text-white text-[8px] font-bold">MC</div>
              <div className="h-6 w-10 bg-blue-500 rounded flex items-center justify-center text-white text-[8px] font-bold">AMEX</div>
              <div className="h-6 w-10 bg-yellow-400 rounded flex items-center justify-center text-blue-900 text-[8px] font-bold">PP</div>
            </div>
          </div>

          <div className="flex items-start gap-2 text-xs text-gray-500 mt-4">
            <ShieldCheck className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
            <p>Safe and secure checkout. Your personal information is protected by industry-standard encryption.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
