"use client";

import React from "react";
import { ExecutionComponentProps } from "@/types";
import { MessageCircle, CheckCircle2, ExternalLink } from "lucide-react";

const LinkedinPostCommentor = ({
  logs,
  isLoading,
  isFetching,
}: ExecutionComponentProps) => {

  // Hardcoded logs for UI testing – will be ignored when real logs are passed from host
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const isBusy = isLoading || isFetching;

  const executionContext = (logs as any)?.execution_context || {};
  const contextValues = Object.values(executionContext as any);

  const retrieverContext = (contextValues.find(
    (c: any) => (c as any).agent_title === "Post Retriever"
  ) || contextValues[0] || {}) as any;

  const commenterContext = (contextValues.find(
    (c: any) => (c as any).agent_title === "LinkedIn Post Commenter"
  ) || contextValues[1] || {}) as any;

  const post = retrieverContext.output_data?.posts;
  const postUrl = post?.share_url;
  const postText = post?.text;
  const authorName: string = post?.author?.name || "";
  const authorInitial =
    authorName.trim().charAt(0).toUpperCase() || "P";

  const attachments = Array.isArray(post?.attachments)
    ? post.attachments
    : [];

  const commentText =
    commenterContext.llm_output?.skill?.input?.text ||
    commenterContext.input_data?.text;

  const commentStatus =
    commenterContext.output_data?.comments?.object === "CommentSent"
      ? "Comment sent"
      : undefined;

  if (isBusy) {
    return (
      <div className="w-full flex justify-center">
        <div className="max-w-xl w-full bg-[hsl(var(--surface-container-default))] rounded-xl shadow-lg p-6">
          <p className="text-sm font-medium text-[hsl(var(--text-inverse-subtle))] text-center">
            Preparing LinkedIn comment...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-xl w-full bg-[hsl(var(--surface-container-default))] rounded-2xl shadow-md border border-[hsl(var(--stroke-soft))] px-5 py-5 space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-[hsl(var(--surface-interactive-brand))] flex items-center justify-center">
            <MessageCircle className="h-4 w-4 text-[hsl(var(--surface-inverse))]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-[hsl(var(--text-inverse-default))]">
              Comment added on LinkedIn
            </p>
            {commentStatus && (
              <p className="text-[11px] text-[hsl(var(--text-inverse-subtle))]">
                {commentStatus}
              </p>
            )}
          </div>
          {postUrl && (
            <a
              href={postUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full p-1 hover:bg-[hsl(var(--surface-interactive-subtle))]"
            >
              <ExternalLink className="h-4 w-4 text-[hsl(var(--text-link))]" />
            </a>
          )}
        </div>

        {post && (
          <div className="rounded-lg bg-[hsl(var(--surface-container-default-lighter))] border border-[hsl(var(--stroke-soft))] px-3 py-2 space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-[hsl(var(--surface-interactive-brand))] flex items-center justify-center text-[hsl(var(--surface-inverse))] text-xs font-semibold">
                {authorInitial}
              </div>
              <p className="text-xs font-medium text-[hsl(var(--text-inverse-default))]">
                {authorName || "LinkedIn user"}
              </p>
            </div>
            {postText && (
              <p className="text-[11px] text-[hsl(var(--text-inverse-subtle))] line-clamp-3">
                {postText}
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
          </div>
        )}

        {commentText && (
          <div className="rounded-lg bg-[hsl(var(--surface-container-default-lighter))] border border-[hsl(var(--stroke-soft))] px-3 py-2 flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-[hsl(var(--accent-lime-600))]" />
            <div>
              <p className="text-[11px] uppercase tracking-wide text-[hsl(var(--text-inverse-subtlest))] mb-1">
                Comment sent
              </p>
              <p className="text-xs text-[hsl(var(--text-inverse-default))]">
                {commentText}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkedinPostCommentor;

