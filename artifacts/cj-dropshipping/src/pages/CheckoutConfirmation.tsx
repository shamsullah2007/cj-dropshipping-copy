import { useEffect, useState } from "react";
import { CheckCircle2, Package, MapPin, CreditCard, Truck, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { CheckoutProgress } from "@/components/checkout/CheckoutProgress";
import { CART_ITEMS, SUBTOTAL, TAX, SHIPPING_OPTIONS } from "@/components/checkout/OrderSummary";

function getSession<T>(key: string, fallback: T): T {
  try {
    const v = sessionStorage.getItem(key);
    return v ? (JSON.parse(v) as T) : fallback;
  } catch {
    return fallback;
  }
}

export default function CheckoutConfirmation() {
  const [orderNumber, setOrderNumber] = useState("");
  const [address, setAddress] = useState<{ name: string; line1: string; line2: string; country: string; phone: string } | null>(null);
  const [shipping, setShipping] = useState(SHIPPING_OPTIONS[0]);
  const [payment, setPayment] = useState<{ label: string } | null>(null);

  useEffect(() => {
    setOrderNumber(getSession("cj_order_number", `CJ${Date.now().toString().slice(-8)}`));
    setAddress(
      getSession("cj_address", {
        name: "John Smith",
        line1: "123 Market Street, Apt 4B",
        line2: "San Francisco, CA 94105",
        country: "United States",
        phone: "+1 (415) 555-0192",
      })
    );
    setShipping(getSession("cj_shipping", SHIPPING_OPTIONS[0]));
    setPayment(getSession("cj_payment", { label: "Visa ending in 4242" }));
  }, []);

  const shippingCost = shipping?.price ?? 2.5;
  const total = SUBTOTAL + shippingCost + TAX;

  // Compute estimated delivery date
  const [minDays, maxDays] = shipping?.delivery
    ? shipping.delivery.replace(" days", "").split("–").map(Number)
    : [12, 18];
  const deliveryMin = new Date();
  const deliveryMax = new Date();
  deliveryMin.setDate(deliveryMin.getDate() + (minDays || 12));
  deliveryMax.setDate(deliveryMax.getDate() + (maxDays || 18));
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  const estimatedDelivery = `${fmt(deliveryMin)} – ${fmt(deliveryMax)}`;

  return (
    <div className="min-h-screen bg-[#f5f6f8] font-sans text-slate-800 flex flex-col">
      <Header />

      <main className="max-w-[1400px] mx-auto px-4 py-8 flex-1 w-full">
        <CheckoutProgress currentStep={4} />

        {/* Success Banner */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8 flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-4">
            <CheckCircle2 className="w-12 h-12 text-green-500" strokeWidth={1.5} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h1>
          <p className="text-gray-500 text-sm max-w-md">
            Thank you for your order. We've received your payment and will begin processing right away.
          </p>
          <div className="mt-4 bg-orange-50 border border-orange-200 rounded-lg px-6 py-3">
            <span className="text-sm text-gray-500">Order Number</span>
            <div className="text-xl font-bold text-orange-500 font-mono tracking-wide">{orderNumber}</div>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            A confirmation email has been sent to your registered email address.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column — Order Details */}
          <div className="flex-1 space-y-6">

            {/* Order Items */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-orange-500" />
                Items Ordered
              </h2>
              <div className="divide-y divide-gray-100">
                {CART_ITEMS.map((item) => (
                  <div key={item.sku} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                    <div className="w-16 h-16 bg-gray-50 rounded border border-gray-100 flex-shrink-0 overflow-hidden">
                      <img src={item.img} alt={item.name} className="w-full h-full object-contain mix-blend-multiply p-1" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800 line-clamp-2">{item.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5">SKU: {item.sku}</p>
                      <p className="text-xs text-gray-400">Variant: {item.variant}</p>
                      <p className="text-xs text-gray-500 mt-1">Qty: {item.qty} × ${item.price.toFixed(2)}</p>
                    </div>
                    <div className="text-sm font-bold text-gray-900 flex-shrink-0">${item.subtotal.toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping & Payment Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Shipping Address */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  Shipping Address
                </h2>
                {address ? (
                  <div className="text-sm text-gray-600 space-y-0.5">
                    <div className="font-semibold text-gray-800">{address.name}</div>
                    <div>{address.line1}</div>
                    <div>{address.line2}</div>
                    <div>{address.country}</div>
                    <div className="text-gray-400 mt-1">{address.phone}</div>
                  </div>
                ) : (
                  <div className="text-sm text-gray-400 italic">Loading…</div>
                )}
              </div>

              {/* Shipping Method */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-orange-500" />
                  Shipping Method
                </h2>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="font-semibold text-gray-800">{shipping?.name}</div>
                  <div className="text-xs text-gray-500">Estimated delivery: {shipping?.delivery}</div>
                  <div className="text-sm font-bold text-orange-500 mt-2">${shippingCost.toFixed(2)}</div>
                  <div className="mt-3 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                    <div className="text-xs text-green-700 font-medium">📦 Estimated Arrival</div>
                    <div className="text-xs text-green-600 mt-0.5">{estimatedDelivery}</div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:col-span-2">
                <h2 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-orange-500" />
                  Payment Method
                </h2>
                <div className="text-sm text-gray-700 font-medium">{payment?.label ?? "—"}</div>
              </div>
            </div>
          </div>

          {/* Right Column — Final Summary */}
          <div className="w-full lg:w-[380px] flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:sticky lg:top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal (3 items)</span>
                  <span className="font-medium text-gray-900">${SUBTOTAL.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium text-gray-900">${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Discount</span>
                  <span className="font-medium text-green-600">-$0.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span className="font-medium text-gray-900">${TAX.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-gray-100 flex justify-between items-center mb-6">
                <span className="font-bold text-gray-900">Total Paid</span>
                <span className="text-2xl font-bold text-orange-500">${total.toFixed(2)}</span>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white h-11 font-bold shadow-md shadow-orange-500/20 flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  Track Order
                </Button>
                <Link href="/">
                  <Button variant="outline" className="w-full border-gray-200 text-gray-700 hover:border-orange-400 hover:text-orange-500 h-11 font-medium flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    Continue Shopping
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="ghost" className="w-full text-gray-500 hover:text-orange-500 h-10 text-sm">
                    Back to My Orders
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
