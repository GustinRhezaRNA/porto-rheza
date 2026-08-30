import { Lock } from "lucide-react";

type ConfidentialPlaceholderProps = {
  className?: string;
};

const ConfidentialPlaceholder = ({ className = "" }: ConfidentialPlaceholderProps) => (
  <div
    className={`flex h-full min-h-[260px] w-full flex-col items-center justify-center gap-3 rounded-sm border border-line bg-card px-6 text-center transition-colors group-hover:bg-card-hover ${className}`}
  >
    <Lock className="h-6 w-6 text-muted" />
    <p className="eyebrow text-muted">Confidential</p>
    <p className="max-w-[220px] text-xs leading-relaxed text-ink/50">
      Under NDA : preview not publicly available.
    </p>
  </div>
);

export default ConfidentialPlaceholder;
