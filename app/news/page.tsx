// app/page.tsx

import styles from "./page.module.css";

const newsList = [
  {
    id: "1",
    title: "公式ホームページ（β版）を立ち上げました",
    category: {
      name: "更新情報",
    },
    publishedAt: "2026/04/01",
    image: "",
  },
  {
    id: "2",
    title: "三田で教室を始めました",
    category: {
      name: "更新情報",
    },
    publishedAt: "2026/03/16",
    image: "",
  },
  {
    id: "3",
    title: "となりのきょうしつを開設しました",
    category: {
      name: "更新情報",
    },
    publishedAt: "2026/03/16",
    image: "",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>

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

              {/* =========================
                  Image
              ========================= */}

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

              {/* =========================
                  Content
              ========================= */}

              <div className={styles.newsContent}>

                <h2>
                  {item.title}
                </h2>

                <div className={styles.newsMeta}>

                  <span className={styles.category}>
                    {item.category.name}
                  </span>

                  <span className={styles.date}>
                    {item.publishedAt}
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
          © tonarinokyoushitsu. All Rights Reserved 2026
        </p>

      </footer>

    </main>
  );
}