// app/contact/page.tsx

import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <main className={styles.page}>

      {/* =========================
          Hero
      ========================= */}

      <section className={styles.hero}>

        <div className={styles.heroInner}>
          <h1>Contact</h1>
          <p>お問い合わせ</p>
        </div>

      </section>

      {/* =========================
          Contact
      ========================= */}

      <section className={styles.contactWrapper}>

        <div className={styles.contactCard}>

          <div className={styles.heading}>

            <h2>
              お問い合わせ
            </h2>

            <p>
              ご相談・ご質問などございましたら、
              下記フォームよりお気軽にご連絡ください。
            </p>

          </div>

          <form className={styles.form}>

            {/* 名前 */}

            <div className={styles.formGroup}>

              <label>
                お名前
              </label>

              <input
                type="text"
                placeholder="山田 太郎"
              />

            </div>

            {/* メール */}

            <div className={styles.formGroup}>

              <label>
                メールアドレス
              </label>

              <input
                type="email"
                placeholder="example@email.com"
              />

            </div>

            {/* 件名 */}

            <div className={styles.formGroup}>

              <label>
                件名
              </label>

              <input
                type="text"
                placeholder="お問い合わせ内容"
              />

            </div>

            {/* 内容 */}

            <div className={styles.formGroup}>

              <label>
                お問い合わせ内容
              </label>

              <textarea
                rows={8}
                placeholder="お問い合わせ内容をご入力ください"
              />

            </div>

            {/* Button */}

            <button
              type="submit"
              className={styles.submitButton}
            >
              送信する
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}