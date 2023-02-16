import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Production Ready',
    Svg: require('@site/static/img/PyTorch_logo_icon.svg').default,
    description: (
      <>
        Transition seamlessly between eager and graph modes 
        with TorchScript, and accelerate the path to production 
        with TorchServe.
      </>
    ),
  },
  {
    title: 'Distributed Training',
    Svg: require('@site/static/img/PyTorch_logo_icon.svg').default,
    description: (
      <>
        Scalable distributed training and performance optimization in 
        research and production is enabled by the torch.distributed backend.
      </>
    ),
  },
  {
    title: 'Robust Ecosystem',
    Svg: require('@site/static/img/PyTorch_logo_icon.svg').default,
    description: (
      <>
        A rich ecosystem of tools and libraries extends PyTorch and 
        supports development in computer vision, NLP and more.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
