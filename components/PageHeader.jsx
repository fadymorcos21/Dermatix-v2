export default function PageHeader({ eyebrow, title, italic, lede }) {
  return (
    <section className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 bg-bone border-b border-ink/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {eyebrow && (
          <p className="eyebrow text-ink/50 mb-4 tracking-wider3">{eyebrow}</p>
        )}
        <h1 className="display text-[12vw] sm:text-[8vw] lg:text-[6.5rem] xl:text-[7rem] leading-[0.95] tracking-tightest max-w-5xl">
          {title}
          {italic && (
            <>
              {" "}
              <span className="display-italic text-stone">{italic}</span>
            </>
          )}
        </h1>
        {lede && (
          <p className="mt-6 max-w-xl text-[15px] lg:text-[16px] leading-relaxed text-ink/75">
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}
