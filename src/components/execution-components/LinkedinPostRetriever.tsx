import React from 'react'
import { ExecutionComponentProps } from '@/types'

const LinkedinPostRetriever = ({
  logs,
  isLoading,
  isFetching,
  setUIKey,
  handleMessageSubmit,
}: ExecutionComponentProps) => {
  
  const isBusy = isLoading || isFetching

  const firstKey = logs && logs.execution_context
    ? Object.keys(logs.execution_context)[0]
    : undefined

  const post = firstKey
    ? logs?.execution_context?.[firstKey]?.output_data?.posts
    : undefined

  const author = post?.author
  const attachments = post?.attachments || []
  const repostContent = post?.repost_content

  if (isBusy) {
    return (
      <div className="w-full flex justify-center">
        <div className="max-w-2xl w-full bg-surface-container-default rounded-xl shadow-lg p-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16">
              <div className="absolute inset-0 border-4 border-stroke-soft rounded-full" />
              <div className="absolute inset-0 border-4 border-surface-interactive-brand rounded-full border-t-transparent animate-spin" />
            </div>
            <p className="text-text-inverse-subtle font-medium text-sm sm:text-base">
              Loading LinkedIn post...
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="w-full flex justify-center">
        <div className="max-w-2xl w-full bg-surface-container-default rounded-xl shadow-lg p-8 text-center">
          <div className="text-text-inverse-subtlest text-4xl sm:text-5xl mb-3 sm:mb-4">📭</div>
          <h3 className="text-lg sm:text-xl font-semibold text-text-inverse-default mb-1 sm:mb-2">
            No Post Available
          </h3>
          <p className="text-text-inverse-subtle text-sm sm:text-base">
            No execution data found for this LinkedIn post.
          </p>
        </div>
      </div>
    )
  }

  const handleAddComment = () => {
    // Intentionally left as a no-op placeholder; wiring to parent handler can be added separately.
    console.log('Add comment action triggered')
  }

  const handleAddLike = () => {
    console.log('Add like action triggered')
  }

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-2xl w-full bg-surface-container-default rounded-xl shadow-md border border-stroke-soft overflow-hidden">
        <div className="px-4 sm:px-6 pt-4 pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-surface-interactive-brand-raised to-surface-interactive-brand flex items-center justify-center text-primary-foreground font-semibold text-base sm:text-lg shadow-md">
                  {author?.name ? author.name.charAt(0).toUpperCase() : 'U'}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                {author?.name && (
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-semibold text-text-inverse-default hover:text-text-link cursor-pointer hover:underline truncate">
                      {author.name}
                    </span>
                    {author.is_company && (
                      <span className="ml-1 text-[10px] px-1.5 py-0.5 rounded-full bg-surface-container-default-lighter text-text-inverse-subtle uppercase tracking-wide">
                        Company
                      </span>
                    )}
                  </div>
                )}

                {author?.headline && (
                  <p className="text-[11px] sm:text-xs text-text-inverse-subtle truncate">
                    {author.headline}
                  </p>
                )}

                <p className="text-[11px] sm:text-xs text-text-inverse-subtle mt-1 flex items-center space-x-1">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-stroke-soft text-text-inverse-subtle text-[10px]">
                    in
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-6 pb-3">
          <p className="text-sm text-text-inverse-default whitespace-pre-wrap leading-relaxed">
            {post.text}
          </p>
        </div>

        {repostContent && (
          <div className="px-4 sm:px-6 pb-3">
            <div className="border border-stroke-soft rounded-lg overflow-hidden bg-surface-container-sunken">
              <div className="px-3 sm:px-4 pt-3 pb-2 border-b border-stroke-subtle flex items-start space-x-2">
                <div className="h-8 w-8 rounded-full bg-surface-interactive-default flex items-center justify-center text-primary-foreground text-xs font-semibold">
                  {repostContent.author?.name
                    ? repostContent.author.name.charAt(0).toUpperCase()
                    : 'U'}
                </div>
                <div className="flex-1 min-w-0">
                  {repostContent.author?.name && (
                    <p className="text-xs font-semibold text-text-inverse-default truncate">
                      {repostContent.author.name}
                    </p>
                  )}
                  <p className="text-[11px] text-text-inverse-subtle flex items-center space-x-1">
                    <span>{repostContent.date}</span>
                  </p>
                </div>
              </div>
              <div className="px-3 sm:px-4 py-3">
                <p className="text-xs sm:text-sm text-text-inverse-default whitespace-pre-wrap leading-relaxed line-clamp-6">
                  {repostContent.text}
                </p>
              </div>
            </div>
          </div>
        )}

        {attachments.length > 0 && (
          <div className="px-4 sm:px-6 pb-3">
            <div className="grid gap-1">
              {attachments.map((attachment: any, index: number) => (
                attachment.type === 'img' ? (
                  <img
                    key={index}
                    className="w-full max-h-[460px] object-cover rounded-lg bg-surface-container-sunken"
                    src={attachment.url}
                    alt="Post attachment"
                  />
                ) : null
              ))}
            </div>
          </div>
        )}

        <div className="px-4 sm:px-6 py-2 border-t border-stroke-soft">
          <div className="flex items-center justify-between text-[11px] sm:text-xs text-text-inverse-subtle">
            <div className="flex items-center space-x-1">
              <div className="flex -space-x-1">
                <div className="w-4 h-4 rounded-full bg-surface-interactive-brand border-2 border-surface-container-default flex items-center justify-center">
                  <svg
                    className="w-2.5 h-2.5 text-primary-foreground fill-primary-foreground"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.999 14.667a.667.667 0 01-.472-.195l-4.8-4.8a3.333 3.333 0 114.714-4.714l.558.559.558-.559a3.333 3.333 0 114.714 4.714l-4.8 4.8a.667.667 0 01-.472.195z" />
                  </svg>
                </div>
              </div>
              <span className="ml-1 hover:text-text-link cursor-pointer hover:underline">
                {post.reaction_counter && post.reaction_counter > 0
                  ? `${post.reaction_counter} reactions`
                  : 'Be the first to react'}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="hover:text-text-link cursor-pointer hover:underline">
                {post.comment_counter} {post.comment_counter === 1 ? 'comment' : 'comments'}
              </span>
              <span className="hover:text-text-link cursor-pointer hover:underline">
                {post.repost_counter} {post.repost_counter === 1 ? 'repost' : 'reposts'}
              </span>
            </div>
          </div>
        </div>

        <div className="px-2 sm:px-4 py-1 border-t border-stroke-subtle bg-surface-container-sunken">
          <div className="grid grid-cols-2 gap-1 sm:gap-2">
            <button
              type="button"
              onClick={handleAddLike}
              className="flex items-center justify-center space-x-1.5 sm:space-x-2 py-2 sm:py-2.5 rounded-md hover:bg-surface-container-default-lighter text-text-inverse-subtle text-xs sm:text-sm font-medium transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
              <span>Like</span>
            </button>

            <button
              type="button"
              onClick={handleAddComment}
              className="flex items-center justify-center space-x-1.5 sm:space-x-2 py-2 sm:py-2.5 rounded-md hover:bg-surface-container-default-lighter text-text-inverse-subtle text-xs sm:text-sm font-medium transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>Comment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LinkedinPostRetriever