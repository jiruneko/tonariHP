import Image from "next/image";

import styles from "./page.module.css";

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/3EEE19A9-16CA-4B19-9BDB-2E55A7CF97D2.jpeg",
      },
      name: "てつにい",
      position: "代表",
      profile:
        "こんにちは。運営スタッフ代表のてつにいです。\nとなりのきょうしつは、「自習してもしなくてもよい」「交流してもしなくてもよい」居場所です。\n人と学びの“ちょうどいい距離”を大切に、安心して過ごせる場づくりをしています。できる・できないに関わらず、一歩踏み出すきっかけを一緒に育てていきます。\nよろしくお願い致します。",
    },
    {
      id: "2",
      image: {
        url: "/37065D27-68B5-46E5-92CB-7EEB742C69C8_1_105_c.jpeg",
      },
      name: "くま",
      position: "副代表",
      profile:
        "こんにちは。運営スタッフのくまです。\n優しい居場所作りを目指して日々試行錯誤をしています。\nよく皆様に、スタッフのおじさんと言われます。本職はIT担当です。\n皆様にお会いできることを楽しみにしております。\nよろしくお願い致します。",
    },
  ],
};

export default function Page() {
  return (
    <>
      {/* =========================================================
          Sub Hero
      ========================================================= */}

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            Members
          </h1>

          <p className={styles.heroSub}>
            メンバー
          </p>
        </div>
      </section>

      {/* =========================================================
          Main
      ========================================================= */}

      <main className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>
            メンバー
          </h2>

          <p className={styles.text}>
            となりのきょうしつを支える
            メンバーをご紹介します。
          </p>
        </div>

        {data.contents.length === 0 ? (
          <p className={styles.empty}>
            メンバーが登録されていません。
          </p>
        ) : (
          <ul className={styles.members}>
            {data.contents.map((member) => (
              <li
                key={member.id}
                className={styles.list}
              >

                {/* =========================================================
                    Image
                ========================================================= */}

                <div className={styles.imageWrapper}>
                  <Image
                    src={member.image.url}
                    alt={member.name}
                    width={1200}
                    height={1200}
                    sizes="(max-width: 768px) 100vw, 320px"
                    className={styles.image}
                    priority
                  />
                </div>

                {/* =========================================================
                    Content
                ========================================================= */}

                <div className={styles.content}>
                  <h3 className={styles.name}>
                    {member.name}
                  </h3>

                  <p className={styles.position}>
                    {member.position}
                  </p>

                  <p className={styles.profile}>
                    {member.profile}
                  </p>
                </div>

              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}