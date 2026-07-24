import { Check } from "lucide-react";

const STEPS = [
  { id: 1, label: "Cart" },
  { id: 2, label: "Shipping" },
  { id: 3, label: "Payment" },
  { id: 4, label: "Confirmation" },
];

interface CheckoutProgressProps {
  currentStep: 1 | 2 | 3 | 4;
}

export function CheckoutProgress({ currentStep }: CheckoutProgressProps) {
  const currentLabel = STEPS[currentStep - 1].label;

  return (
    <div className="mb-8">
      {/* Mobile compact progress */}
      <div className="flex sm:hidden items-center gap-2 text-sm font-medium text-gray-600">
        <div className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
          {currentStep}
        </div>
        <span>
          Step {currentStep} of 4:{" "}
          <span className="text-orange-500 font-semibold">{currentLabel}</span>
        </span>
      </div>

      {/* Desktop full progress bar */}
      <div className="hidden sm:flex items-center justify-between max-w-2xl mx-auto text-sm font-medium relative">
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>

        {STEPS.map((step) => {
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;

          return (
            <div
              key={step.id}
              className={`flex flex-col items-center gap-2 bg-[#f5f6f8] px-2 ${
                isActive ? "text-orange-500" : isCompleted ? "text-orange-400" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors ${
                  isCompleted
                    ? "bg-orange-500 text-white"
                    : isActive
                    ? "bg-orange-500 text-white"
                    : "bg-white border-2 border-gray-300 text-gray-400"
                }`}
              >
                {isCompleted ? <Check className="w-4 h-4" strokeWidth={3} /> : step.id}
              </div>
              <span>{step.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
