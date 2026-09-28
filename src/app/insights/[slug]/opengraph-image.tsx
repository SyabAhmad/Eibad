import { ImageResponse } from "next/og";
import { getInsightArticle, insightArticles } from "@/app/insights-data";
import { siteName } from "@/app/seo";

export const alt = "Insights by Eibad Hassan Shah";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#111111";
const PAPER = "#f1efea";
const SAND = "#b79a80";
const MUTED = "#a6a19a";

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

/** Long titles need a smaller face size or they overflow the 1200px canvas. */
function titleSize(title: string) {
  if (title.length > 78) return 54;
  if (title.length > 58) return 64;
  if (title.length > 40) return 76;
  return 88;
}

/** Break a long title across lines at word boundaries so nothing is clipped. */
function wrap(title: string, maxChars: number): string[] {
  const words = title.split(" ");
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 4);
}

export default async function ArticleOgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsightArticle(slug);

  if (!article) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            padding: "80px",
            background: INK,
            color: PAPER,
            fontFamily: "Arial, sans-serif",
            fontSize: 72,
          }}
        >
          INSIGHTS
        </div>
      ),
      { ...size },
    );
  }

  const lines = wrap(article.title, 26);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: INK,
          color: PAPER,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: SAND,
            fontSize: 22,
            letterSpacing: 4,
          }}
        >
          <span>{siteName.toUpperCase()}</span>
          <span>{article.category}</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.12em",
            fontSize: titleSize(article.title),
            lineHeight: 0.92,
            letterSpacing: -4,
            textTransform: "uppercase",
          }}
        >
          {lines.map((line, index) => (
            <div key={line} style={{ color: index === 0 ? PAPER : SAND }}>
              {line}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: MUTED,
            fontSize: 20,
            letterSpacing: 2,
          }}
        >
          <span>{article.readingTime}</span>
          <span>RIYADH, SAUDI ARABIA</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
