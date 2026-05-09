import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Code-First Approach',
    emoji: '💻',
    description: (
      <>
        Define your services and DTOs in pure PHP. Grpcavel handles the 
        protobuf generation and compilation automatically.
      </>
    ),
  },
  {
    title: 'Laravel Native',
    emoji: '🏗️',
    description: (
      <>
        Full support for Laravel validation, middleware, service container, 
        and Eloquent models within your gRPC services.
      </>
    ),
  },
  {
    title: 'High Performance',
    emoji: '⚡',
    description: (
      <>
        Built on top of RoadRunner for a persistent worker model, 
        providing extreme throughput and low latency.
      </>
    ),
  },
];

function Feature({title, emoji, description}: {title: string, emoji: string, description: ReactNode}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{emoji}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
