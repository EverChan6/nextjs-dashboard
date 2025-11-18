import { Metadata } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '@/app/ui/posts/utils.module.css';
import styles from '@/app/ui/posts/layout.module.css';

export const metadata: Metadata = {
  title: 'Next.js Sample Website',
  description: 'Learn how to build a personal website using Next.js',
};

const name = 'Hello';

export default function Layout({
  children,
  home = true,
}: {
  children: React.ReactNode;
  home: boolean;
}) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
