import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css"
import Image from "next/image"
import NewsList from "./_components/ButtonLink/NewsList";
import { News } from "./_libs/microcms";

// type News = {
//   id: string;
//   title: string;
//   category: {
//     name: string;
//   };
//   publishedAt: string;
//   createdAt: string;
// };

const data: {
  contents: News[] } = {
    contents: [
      {
        id: "1",
        title:
        "公式ホームページを立ち上げました",
        category: {
          name: "更新情報",
        },
        publishedAt: "2026/04/01",
        createdAt: "2026/04/01",
      },
      {
        id: "2",
        title:
        "三田で教室を始めました",
        category: {
          name: "更新情報",
        },
        publishedAt: "2026/03/16",
        createdAt: "2026/03/16",
      },
      {
        id: "3",
        title:
        "となりのきょうしつ開設しました",
        category: {
          name: "更新情報",
        },
        publishedAt: "2026/03/16",
        createdAt: "2026/03/16",
      },
    ],
  };

export default function Home() {
  const sliceData = data.contents.slice(0, 2);
  // const sliceData: News = [];

  return (
    <>
    <section className={styles.top}>
    <div>
      <h1 className={styles.title}>となりのきょうしつ</h1>
      <p className={styles.description}>わたしたちは、みんなが学べる暖かい居場所を提供しています。</p>
    </div>
    <Image
     className={styles.bgimg} 
     src="/img-mv.jpg" 
     alt="" 
     width={4000}
     height={1200}
     priority
    />
    </section>
    <section className={styles.news}>
      <h2 className={styles.newsTitle}>News</h2>
      {/* <ul>
        {sliceData.map((article) => (
          <li key={article.id} className={styles.list}>
            <div className={styles.link}>
            <Image
            className={styles.image}
            src="/no-image.png"
            alt="No Image"
            width={1200}
            height={630}
            priority
             />
             <dl className={styles.content}>
              <dt className={styles.newsItemTitle}>{article.title}</dt>
              <dd className={styles.meta}>
                <span className={styles.data}>
                  <Image
                  src="/clock.svg"
                  alt=""
                  width={16}
                  height={16}
                  priority
                  />
                  {article.publishedAt}
                </span>
              </dd>
             </dl>
             </div>
          </li>
        ))}
      </ul> */}
      <NewsList news={sliceData} />
      <div className={styles.newsLink}>
        <ButtonLink href="/news">もっと見る</ButtonLink>
      </div>
    </section>
    </>
  );
}