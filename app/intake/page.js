import { IntakeFormProvider } from "@/app/_components/intake-form/IntakeFormContext";
import IntakeForm from "@/app/_components/intake-form/IntakeForm";

export default function IntakePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-3xl font-semibold text-neutral-900">
        Start Your Project
      </h1>
      <IntakeFormProvider>
        <IntakeForm />
      </IntakeFormProvider>
    </div>
  );
}
