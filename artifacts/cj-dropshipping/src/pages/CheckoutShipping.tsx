import { useState } from "react";
import { ArrowLeft, MapPin, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link, useLocation } from "wouter";
import { CheckoutProgress } from "@/components/checkout/CheckoutProgress";
import { OrderSummary, SHIPPING_OPTIONS } from "@/components/checkout/OrderSummary";

const SAVED_ADDRESSES = [
  {
    id: "addr1",
    name: "John Smith",
    line1: "123 Market Street, Apt 4B",
    line2: "San Francisco, CA 94105",
    country: "United States",
    phone: "+1 (415) 555-0192",
  },
  {
    id: "addr2",
    name: "John Smith",
    line1: "456 Ocean Ave",
    line2: "Los Angeles, CA 90291",
    country: "United States",
    phone: "+1 (310) 555-0847",
  },
];

export default function CheckoutShipping() {
  const [, setLocation] = useLocation();
  const [addressMode, setAddressMode] = useState<"saved" | "new">("saved");
  const [selectedAddress, setSelectedAddress] = useState("addr1");
  const [shippingMethod, setShippingMethod] = useState("standard");

  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    line1: "", line2: "", city: "", state: "", zip: "", country: "us",
  });

  const selectedShipping = SHIPPING_OPTIONS.find((s) => s.id === shippingMethod)!;

  function handleContinue() {
    // Persist selections to sessionStorage for downstream steps
    const address =
      addressMode === "saved"
        ? SAVED_ADDRESSES.find((a) => a.id === selectedAddress)!
        : {
            id: "new",
            name: `${form.firstName} ${form.lastName}`,
            line1: form.line1 + (form.line2 ? `, ${form.line2}` : ""),
            line2: `${form.city}, ${form.state} ${form.zip}`,
            country: form.country === "us" ? "United States" : form.country,
            phone: form.phone,
          };
    sessionStorage.setItem("cj_address", JSON.stringify(address));
    sessionStorage.setItem("cj_shipping", JSON.stringify(selectedShipping));
    setLocation("/checkout/payment");
  }

  return (
    <div className="min-h-screen bg-[#f5f6f8] font-sans text-slate-800 flex flex-col">
      <Header />

      <main className="max-w-[1400px] mx-auto px-4 py-8 flex-1 w-full">
        <CheckoutProgress currentStep={2} />

        <h1 className="text-2xl font-bold text-gray-900 mb-6">Shipping Information</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1 space-y-6">

            {/* Address Selection */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                Delivery Address
              </h2>

              {/* Toggle */}
              <div className="flex gap-2 mb-5">
                <button
                  onClick={() => setAddressMode("saved")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                    addressMode === "saved"
                      ? "bg-orange-500 text-white border-orange-500"
                      : "bg-white text-gray-600 border-gray-200 hover:border-orange-300"
                  }`}
                >
                  Saved Addresses
                </button>
                <button
                  onClick={() => setAddressMode("new")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors flex items-center gap-1.5 ${
                    addressMode === "new"
                      ? "bg-orange-500 text-white border-orange-500"
                      : "bg-white text-gray-600 border-gray-200 hover:border-orange-300"
                  }`}
                >
                  <Plus className="w-3.5 h-3.5" /> New Address
                </button>
              </div>

              {addressMode === "saved" ? (
                <RadioGroup value={selectedAddress} onValueChange={setSelectedAddress} className="gap-3">
                  {SAVED_ADDRESSES.map((addr) => (
                    <div
                      key={addr.id}
                      className="flex items-start gap-3 border border-gray-200 p-4 rounded-lg hover:border-orange-300 transition-colors [&:has([data-state=checked])]:border-orange-500 [&:has([data-state=checked])]:bg-orange-50/30 cursor-pointer"
                    >
                      <RadioGroupItem
                        value={addr.id}
                        id={addr.id}
                        className="mt-1 border-gray-300 data-[state=checked]:border-orange-500 text-orange-500"
                      />
                      <Label htmlFor={addr.id} className="cursor-pointer flex-1">
                        <div className="font-semibold text-gray-800">{addr.name}</div>
                        <div className="text-sm text-gray-600 mt-0.5">{addr.line1}</div>
                        <div className="text-sm text-gray-600">{addr.line2}</div>
                        <div className="text-sm text-gray-500 mt-0.5">{addr.country} · {addr.phone}</div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" value={form.firstName} onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))} className="h-11" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Smith" value={form.lastName} onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))} className="h-11" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="john@example.com" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} className="h-11" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} className="h-11" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="line1">Address Line 1 *</Label>
                    <Input id="line1" placeholder="Street address, P.O. box" value={form.line1} onChange={(e) => setForm((f) => ({ ...f, line1: e.target.value }))} className="h-11" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="line2">Address Line 2</Label>
                    <Input id="line2" placeholder="Apartment, suite, unit, building, floor, etc." value={form.line2} onChange={(e) => setForm((f) => ({ ...f, line2: e.target.value }))} className="h-11" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5 sm:col-span-1">
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" placeholder="San Francisco" value={form.city} onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))} className="h-11" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="state">State / Province *</Label>
                      <Select value={form.state} onValueChange={(v) => setForm((f) => ({ ...f, state: v }))}>
                        <SelectTrigger className="h-11"><SelectValue placeholder="Select" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="CA">California</SelectItem>
                          <SelectItem value="NY">New York</SelectItem>
                          <SelectItem value="TX">Texas</SelectItem>
                          <SelectItem value="FL">Florida</SelectItem>
                          <SelectItem value="WA">Washington</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="zip">ZIP / Postal Code *</Label>
                      <Input id="zip" placeholder="90210" value={form.zip} onChange={(e) => setForm((f) => ({ ...f, zip: e.target.value }))} className="h-11" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="country">Country *</Label>
                    <Select value={form.country} onValueChange={(v) => setForm((f) => ({ ...f, country: v }))}>
                      <SelectTrigger className="h-11"><SelectValue placeholder="Select Country" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
            </div>

            {/* Shipping Method */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Shipping Method</h2>
              <RadioGroup value={shippingMethod} onValueChange={setShippingMethod} className="gap-3">
                {SHIPPING_OPTIONS.map((opt) => (
                  <div
                    key={opt.id}
                    className="flex items-center justify-between gap-2 border border-gray-200 p-3 rounded-lg hover:border-orange-300 transition-colors [&:has([data-state=checked])]:border-orange-500 [&:has([data-state=checked])]:bg-orange-50/30 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value={opt.id} id={`ship-${opt.id}`} className="border-gray-300 data-[state=checked]:border-orange-500 text-orange-500" />
                      <Label htmlFor={`ship-${opt.id}`} className="cursor-pointer">
                        <div className="font-semibold text-gray-800">{opt.name}</div>
                        <div className="text-xs text-gray-500 mt-0.5">Estimated Delivery: {opt.delivery}</div>
                      </Label>
                    </div>
                    <div className="font-bold text-gray-900">${opt.price.toFixed(2)}</div>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Navigation — desktop */}
            <div className="hidden sm:flex items-center justify-between">
              <Link href="/checkout">
                <Button variant="outline" className="border-gray-300 text-gray-600 hover:border-orange-400 hover:text-orange-500 flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" /> Back to Cart
                </Button>
              </Link>
              <Button
                onClick={handleContinue}
                className="bg-orange-500 hover:bg-orange-600 text-white h-12 px-8 font-bold shadow-md shadow-orange-500/20"
              >
                Continue to Payment
              </Button>
            </div>
          </div>

          {/* Right Column — Order Summary */}
          <OrderSummary shippingCost={selectedShipping.price} />
        </div>
      </main>

      {/* Mobile sticky footer */}
      <div className="sm:hidden sticky bottom-0 bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-2 z-40 shadow-lg">
        <Button
          onClick={handleContinue}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 font-bold shadow-md shadow-orange-500/20"
        >
          Continue to Payment
        </Button>
        <Link href="/checkout">
          <Button variant="ghost" className="w-full text-gray-500 text-sm h-9">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Cart
          </Button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
