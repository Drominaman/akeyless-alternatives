import { WorkflowStep } from '@/types/use-case';

interface WorkflowStepsProps {
  steps: WorkflowStep[];
  title?: string;
}

export default function WorkflowSteps({ steps, title = "How It Works" }: WorkflowStepsProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center">
          {title}
        </h2>
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.step} className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-bold flex items-center justify-center">
                  {step.step}
                </div>
              </div>
              <div className="pt-1">
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
