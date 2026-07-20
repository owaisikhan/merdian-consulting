export default function ProgressSteps({ currentStep, totalSteps, labels }) {
  return (
    <ol className="mb-8 flex items-center justify-between">
      {labels.map((label, index) => {
        const stepNumber = index + 1;
        const isComplete = stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;

        return (
          <li key={label} className="flex flex-1 flex-col items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                isComplete
                  ? "bg-primary-600 text-white"
                  : isCurrent
                  ? "border-2 border-primary-600 text-primary-600"
                  : "border-2 border-neutral-300 text-neutral-400"
              }`}
              aria-current={isCurrent ? "step" : undefined}
            >
              {stepNumber}
            </div>
            <span className="mt-2 text-center text-xs text-neutral-600">
              {label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
