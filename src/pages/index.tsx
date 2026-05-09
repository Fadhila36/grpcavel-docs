import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import CodeBlock from '@theme/CodeBlock';

import styles from './index.module.css';

const codeExample = `#[GrpcService]
class UserService
{
    #[GrpcMethod]
    public function getUser(GetUserRequest $request): UserResponse
    {
        $user = User::findOrFail($request->id);
        
        return UserResponse::fromModel($user);
    }
}`;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <img src="img/logo.png" alt="Grpcavel Logo" className={styles.heroLogo} />
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/introduction">
              Get Started →
            </Link>
            <Link
              className="button button--secondary button--lg"
              href="https://github.com/fadhila36/grpcavel">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function CodePreview() {
  return (
    <div className="container padding-vert--xl">
      <div className="row" style={{ alignItems: 'center' }}>
        <div className="col col--6">
          <Heading as="h2" className="margin-bottom--md" style={{ fontSize: '2.5rem', fontWeight: 800 }}>
            Write Code, Not Protos
          </Heading>
          <p className="text--large" style={{ fontSize: '1.25rem', color: 'var(--ifm-color-emphasis-700)' }}>
            With Grpcavel's <strong>code-first approach</strong>, you define your gRPC services using standard PHP classes and attributes. 
            No need to manually write or maintain complex <code>.proto</code> files.
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            Simply annotate your methods, and Grpcavel will handle the generation and compilation of protobuf files automatically.
          </p>
        </div>
        <div className="col col--6">
          <div style={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', borderRadius: '12px', overflow: 'hidden' }}>
            <CodeBlock language="php" title="app/Grpc/Services/UserService.php">
              {codeExample}
            </CodeBlock>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Modern gRPC for Laravel`}
      description="The gRPC framework for Laravel that focuses on developer experience. Code-first, high performance, and hardened for production.">
      <HomepageHeader />
      <main>
        <CodePreview />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
