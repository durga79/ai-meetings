import React from 'react'
import { ExecutionComponentProps } from '@/types'

const LinkedinPostLiker = ({
  logs,
  isLoading,
  isFetching,
}: ExecutionComponentProps) => {

  const isBusy = isLoading || isFetching

  const contextKey = logs && logs.execution_context
    ? Object.keys(logs.execution_context)[0]
    : undefined

  const context = contextKey
    ? logs?.execution_context?.[contextKey]
    : undefined

  const input = context?.input_data || {}
  const reaction = context?.output_data?.reactions

  if (isBusy) {
    return (
      <div className="w-full flex justify-center">
        <div className="max-w-2xl w-full bg-[hsl(var(--surface-container-default))] rounded-xl shadow-lg p-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16">
              <div className="absolute inset-0 border-4 border-[hsl(var(--stroke-soft))] rounded-full" />
              <div className="absolute inset-0 border-4 border-[hsl(var(--surface-interactive-brand))] rounded-full border-t-transparent animate-spin" />
            </div>
            <p className="text-[hsl(var(--text-inverse-subtle))] font-medium text-sm sm:text-base">
              Executing LinkedIn like...
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (!context) {
    return (
      <div className="w-full flex justify-center">
        <div className="max-w-2xl w-full bg-[hsl(var(--surface-container-default))] rounded-xl shadow-lg p-8 text-center">
          <div className="text-[hsl(var(--text-inverse-subtlest))] text-4xl sm:text-5xl mb-3 sm:mb-4">📭</div>
          <h3 className="text-lg sm:text-xl font-semibold text-[hsl(var(--text-inverse-default))] mb-1 sm:mb-2">
            No Execution Data
          </h3>
          <p className="text-[hsl(var(--text-inverse-subtle))] text-sm sm:text-base">
            No LinkedIn like execution details are available.
          </p>
        </div>
      </div>
    )
  }

  const reactionType = input.reaction_type
  const reactionStatus = reaction?.object

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-xl w-full bg-[hsl(var(--surface-container-default))] rounded-2xl shadow-md border border-[hsl(var(--stroke-soft))] px-5 sm:px-6 py-5 space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[hsl(var(--surface-interactive-brand))] flex items-center justify-center text-white text-lg sm:text-xl">
            👍
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base font-semibold text-[hsl(var(--text-inverse-default))] truncate">
              Liked the LinkedIn post
            </p>
            <p className="mt-0.5 text-[11px] sm:text-xs text-[hsl(var(--text-inverse-subtle))] truncate">
              Reaction: {reactionType || "like"} • Status:{" "}
              {reactionStatus === "ReactionAdded" || !reactionStatus ? "Like added" : reactionStatus}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LinkedinPostLiker