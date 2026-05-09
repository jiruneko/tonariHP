// app/page.tsx

import styles from "./page.module.css";

const newsList = [
  {
    id: 1,
    title: "次世代AI技術の研究開発に向けた新プロジェクト立ち上げ",
    category: "プレスリリース",
    date: "2024/02/12",
    image: "/images/news1.jpg",
  },
  {
    id: 2,
    title: "自律走行ロボットの試験運用開始",
    category: "お知らせ",
    date: "2024/02/12",
    image: "/images/news2.jpg",
  },
  {
    id: 3,
    title: "新たなパートナーシップの発表",
    category: "プレスリリース",
    date: "2024/02/12",
    image: "/images/news3.jpg",
  },
  {
    id: 4,
    title: "次世代自律システムの公開セミナー開催",
    category: "重要",
    date: "2024/02/12",
    image: null,
  },
  {
    id: 5,
    title: "最新製品アップデートのお知らせ",
    category: "お知らせ",
    date: "2024/02/12",
    image: null,
  },
];

export default function Home() {
  return (
    <main className={styles.page}>

      {/* =========================
          Header
      ========================= */}

     

      {/* =========================
          Hero
      ========================= */}

      <section className={styles.hero}>

        <div className={styles.heroInner}>
          <h1>News</h1>
          <p>ニュース</p>
        </div>

      </section>

      {/* =========================
          News
      ========================= */}

      <section className={styles.newsWrapper}>

        <div className={styles.newsCard}>

          {newsList.map((item) => (
            <article
              key={item.id}
              className={styles.newsItem}
            >

              <div className={styles.newsImage}>

                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                ) : (
                  <div className={styles.placeholder}>
                    となりのきょうしつ
                  </div>
                )}

              </div>

              <div className={styles.newsContent}>

                <h2>
                  {item.title}
                </h2>

                <div className={styles.newsMeta}>

                  <span className={styles.category}>
                    {item.category}
                  </span>

                  <span className={styles.date}>
                    {item.date}
                  </span>

                </div>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* =========================
          Footer
      ========================= */}

      <footer className={styles.footer}>

        <div className={styles.footerLinks}>
          <a href="#">ニュース</a>
          <a href="#">メンバー</a>
          <a href="#">採用情報</a>
          <a href="#">お問い合わせ</a>
        </div>

        <p>
          © tonarinokyoutitu. All Rights Reserved 2026
        </p>

      </footer>

    </main>
  );
}