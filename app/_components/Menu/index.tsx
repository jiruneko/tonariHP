/* app/_components/Menu/index.tsx */

"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import styles from "./index.module.css";

export default function Menu() {

  const [open, setOpen] = useState(false);

  /* =========================
     スクロール禁止
  ========================= */

  useEffect(() => {

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };

  }, [open]);

  /* =========================
     ESCキーで閉じる
  ========================= */

  useEffect(() => {

    const handleKeyDown = (
      e: KeyboardEvent
    ) => {

      if (e.key === "Escape") {
        setOpen(false);
      }

    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };

  }, []);

  /* =========================
     閉じる
  ========================= */

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>

      {/* =========================
          Overlay
      ========================= */}

      <div
        className={`${styles.overlay} ${
          open ? styles.show : ""
        }`}
        onClick={closeMenu}
      />

      {/* =========================
          Navigation
      ========================= */}

      <nav
        className={`${styles.nav} ${
          open ? styles.open : ""
        }`}
      >

        {/* =========================
            Close Button
        ========================= */}

        <button
          type="button"
          className={styles.close}
          onClick={closeMenu}
          aria-label="メニューを閉じる"
        >
          ×
        </button>

        {/* =========================
            Menu List
        ========================= */}

        <ul className={styles.items}>

          <li>
            <Link
              href="/news"
              onClick={closeMenu}
            >
              ニュース
            </Link>
          </li>

          <li>
            <Link
              href="/members"
              onClick={closeMenu}
            >
              メンバー
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              onClick={closeMenu}
            >
              お問い合わせ
            </Link>
          </li>

        </ul>

      </nav>

      {/* =========================
          Hamburger Button
      ========================= */}

      <button
        type="button"
        className={styles.button}
        onClick={() => setOpen(true)}
        aria-label="メニューを開く"
      >

        <Image
          src="/menu.svg"
          alt=""
          width={24}
          height={24}
          priority
        />

      </button>

    </>
  );
}