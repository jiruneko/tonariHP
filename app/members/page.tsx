import Image from "next/image";
import styles from "./page.module.css";

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/3EEE19A9-16CA-4B19-9BDB-2E55A7CF97D2.jpeg",
        width: 320,
        height: 320,
      },
      name: "てつにい",
      position: "代表",
      profile: "------------------------------------------",
    },
    {
      id: "2",
      image: {
        url: "/4CF2FA13-3798-43DB-A3C7-5F3758FD7A53_1_105_c.jpeg",
        width: 320,
        height: 320,
      },
      name: "くま",
      position: "副代表",
      profile: "******************************************",
    },
  ],
};

export default function Page() {
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                src={member.image.url}
                alt={member.name}
                width={300}
                height={320}
                className={styles.image}
                priority
              />

              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}