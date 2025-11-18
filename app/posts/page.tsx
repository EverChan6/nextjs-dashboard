import Link from 'next/link';
import { getSortedPostsData } from '@/app/lib/posts';
import utilStyles from '@/app/ui/posts/utils.module.css';
import Date from '@/app/ui/posts/date';

export default function Page() {
  const allPostsData = getSortedPostsData();
  return (
    <>
      <section className={utilStyles.headingMd}>
        <p>a new next.js learner</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
