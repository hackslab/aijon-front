"use client";

import { AiModel, Application, Organization } from "@/lib/types";
import EditApplicationModal from "@/components/EditApplicationModal";

interface BotTokenCardProps {
  application: Application;
  organizations: Organization[];
  aiModels: AiModel[];
  title?: string;
  description?: string;
  buttonLabel?: string;
}

export default function BotTokenCard({
  application,
  organizations,
  aiModels,
  title = "Telegram Bot Token",
  description = "Keep this token secret. Update it here if needed.",
  buttonLabel = "Edit Token",
}: BotTokenCardProps) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {title}
          </h2>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            {description}
          </p>
        </div>
        <EditApplicationModal
          application={application}
          organizations={organizations}
          aiModels={aiModels}
          buttonLabel={buttonLabel}
          className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 transition-colors"
        />
      </div>
    </div>
  );
}
