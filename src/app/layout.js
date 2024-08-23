import "@/assets/scss/style.scss"

export const metadata = {
  title: "이장희 포트폴리오",
  description: "next.js를 프레임워크를 통해 제작한 포트폴리오",
  keywords: ["포트폴리오", "next.js", "Portfolio", "이장희포트폴이오"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+sml" href="favicon.svg" />
      <body>{children}</body>
    </html>
  );
}
