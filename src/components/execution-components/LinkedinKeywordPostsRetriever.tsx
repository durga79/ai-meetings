"use client";

import React from "react";
import { ExecutionComponentProps } from "@/types";
import { ExternalLink, ThumbsUp, MessageCircle } from "lucide-react";

const LinkedinKeywordPostsRetriever = ({
  logs,
  isLoading,
  isFetching,
  handleMessageSubmit,
}: ExecutionComponentProps) => {

  const isBusy = isLoading || isFetching  && !logs?.execution_context;

  const contextKey =
    logs && (logs as any).execution_context
      ? Object.keys((logs as any).execution_context)[0]
      : undefined;

  const context = contextKey
    ? (logs as any)?.execution_context?.[contextKey]    
    : undefined;

  const keyword =
    (logs as any)?.input_variables?.keyword ??
    (logs as any)?.input_variables?.keywords ??
    "";

  const searchedPosts =
    context?.output_data?.searched_posts?.items ??
    context?.output_data?.searched_posts ??
    [];

  if (isBusy) {
    return (
      <div className="w-full flex justify-center">
        <div className="max-w-3xl w-full bg-[hsl(var(--surface-container-default))] rounded-xl shadow-lg p-6">
          <div className="flex flex-col items-center space-y-3">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 border-4 border-[hsl(var(--stroke-soft))] rounded-full" />
              <div className="absolute inset-0 border-4 border-[hsl(var(--surface-interactive-brand))] rounded-full border-t-transparent animate-spin" />
            </div>
            <p className="text-[hsl(var(--text-inverse-subtle))] font-medium text-sm">
              Fetching LinkedIn posts...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!searchedPosts || searchedPosts.length === 0) {
    return (
      <div className="w-full flex justify-center">
        <div className="max-w-3xl w-full bg-[hsl(var(--surface-container-default))] rounded-xl shadow-lg p-6 text-center">
          <div className="text-[hsl(var(--text-inverse-subtlest))] text-4xl mb-3">
            🔍
          </div>
          <h3 className="text-lg font-semibold text-[hsl(var(--text-inverse-default))] mb-1">
            No posts found
          </h3>
          <p className="text-sm text-[hsl(var(--text-inverse-subtle))]">
            {keyword
              ? `No LinkedIn posts were found for "${keyword}".`
              : "No LinkedIn posts were found for the given search."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-3xl w-full bg-[hsl(var(--surface-container-default))] rounded-2xl shadow-md border border-[hsl(var(--stroke-soft))] px-5 py-5 space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-10 w-10 rounded-full bg-[hsl(var(--surface-interactive-brand))] flex items-center justify-center text-white text-lg">
              #
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[hsl(var(--text-inverse-default))] truncate">
                LinkedIn posts for{" "}
                {keyword ? `"${keyword}"` : "your search keywords"}
              </p>
              <p className="mt-0.5 text-[11px] text-[hsl(var(--text-inverse-subtle))] truncate">
                Showing {searchedPosts.length}{" "}
                {searchedPosts.length === 1 ? "result" : "results"}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
          {searchedPosts.map((item: any, index: number) => {
            const description =
              item.description ||
              item.snippet ||
              item.text ||
              item.content ||
              "";

            const url = item.share_url || item.url || item.link;

            const reactions =
              item.reactions_count ??
              item.reactions ??
              item.likes ??
              undefined;

            const comments =
              item.comments_count ??
              item.comments ??
              item.comment_count ??
              undefined;

            const attachments = Array.isArray(item.attachments)
              ? item.attachments
              : [];

            const authorName: string = item.author?.name || "";
            const initial =
              authorName.trim().charAt(0).toUpperCase() || "P";

            return (
              <div
                key={item.id || item.urn || index}
                className="rounded-xl bg-[hsl(var(--surface-container-default-lighter))] border border-[hsl(var(--stroke-soft))] px-4 py-3 space-y-2"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-[hsl(var(--surface-interactive-brand))] flex items-center justify-center text-[hsl(var(--surface-inverse))] text-sm font-semibold">
                      {initial}
                    </div>
                    <p className="text-xs font-medium text-[hsl(var(--text-inverse-default))]">
                      {authorName || "LinkedIn user"}
                    </p>
                  </div>
                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full p-1 hover:bg-[hsl(var(--surface-interactive-subtle))]"
                    >
                      <ExternalLink className="h-4 w-4 text-[hsl(var(--text-link))]" />
                    </a>
                  )}
                </div>

                {description && (
                  <p className="text-xs text-[hsl(var(--text-inverse-subtle))]">
                    {description}
                  </p>
                )}

                {attachments.length > 0 && (
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {attachments.map((att: any, i: number) =>
                        att.type === "img" && att.url ? (
                          <img
                            key={att.id || i}
                            src={att.url}
                            alt=""
                            className="rounded-lg max-h-40 w-auto object-cover border border-[hsl(var(--stroke-soft))]"
                          />
                        ) : null
                      )}
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3 pt-1 text-[11px] text-[hsl(var(--text-inverse-subtlest))]">
                  {reactions !== undefined && <span>👍 {reactions}</span>}
                  {comments !== undefined && <span>💬 {comments}</span>}
                </div>

                <div className="mt-3 border-t border-[hsl(var(--stroke-soft))] pt-3 flex items-center justify-between gap-6 text-sm text-[hsl(var(--text-inverse-subtle))] w-2/3 mx-auto">
                  <button
                    type="button"
                    className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-[hsl(var(--surface-interactive-subtle))] hover:text-[hsl(var(--text-link))] transition-colors"
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span>Like</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-[hsl(var(--surface-interactive-subtle))] hover:text-[hsl(var(--text-link))] transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Comment</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-4 flex gap-4">
          <button
            type="button"
            onClick={() => handleMessageSubmit?.("Like all")}
            className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[hsl(var(--surface-interactive-secondary))] text-[hsl(var(--text-inverse-default))] text-sm font-semibold shadow-sm border border-[hsl(var(--stroke-soft))] hover:bg-[hsl(var(--surface-interactive-subtle))] transition-colors"
          >
            👍 Like all
          </button>
          <button
            type="button"
            onClick={() => handleMessageSubmit?.("Comment on all")}
            className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[hsl(var(--surface-interactive-secondary))] text-[hsl(var(--text-link))] text-sm font-semibold shadow-sm border border-[hsl(var(--surface-interactive-brand))] hover:bg-[hsl(var(--surface-interactive-subtle))] transition-colors"
          >
            💬 Comment all
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkedinKeywordPostsRetriever;

