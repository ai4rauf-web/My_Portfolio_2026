const ComingSoon = ({ title }: { title: string }) => (
  <main className="mx-auto flex w-full max-w-[1243px] flex-col items-start gap-4 px-5 pt-24 lg:px-10 lg:pt-[160px]">
    <h1 className="text-[32px] font-semibold text-ink lg:text-[48px]">{title}</h1>
    <div className="flex items-center gap-4 rounded-lg bg-warn-bg p-3">
      <p className="text-base text-warn-text">This page is on its way... Visit later... 🙇</p>
    </div>
  </main>
)

export default ComingSoon
