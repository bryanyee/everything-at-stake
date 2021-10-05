import anime from 'animejs';
import { useLayoutEffect, createRef } from 'react';

import AnimationContainer from 'components/AnimationContainer';
import Layout from 'components/Layout';
import TxRectangle from 'components/TxRectangle';
import TxWrapper from 'components/TxWrapper';

import { findPage } from 'config/pages';

const page = findPage('understanding-cardanos-hydra-scaling-solution-with-visualizations');

const txWrapperColors = ['orange', 'orange', 'orange', 'orange'];
const containerHeight = 200; // px
const blockHeight = containerHeight / 5; // px
const txPerBlock = 10;
const txRectClass = 'tx-rect';

export default function UnderstandingCardanosHydraScalingSolutionWithVisualizations() {
  const containerRef0 = createRef();

  const runAnimation = () => {
    const containerWidth = containerRef0.current.offsetWidth;
    const txRecWidth = containerWidth / 30;

    // Initial Styles Part 2 - Set pre-animation styles, now that width of the parent container can be calculated
    const txElements = [...document.querySelectorAll(`.${txRectClass}`)];
    txElements.forEach((el, i) => {
      el.style.display = 'inline-block';
      el.style.width = `${txRecWidth}px`;
      el.style.transform = `translateX(${-containerWidth}px) translateY(${(containerHeight * 3 / 8) - Math.floor(i / txPerBlock) * blockHeight}px)`;
    })

    // Start animation timeline
    const timeline = anime.timeline({
      complete: () => { runAnimation() },
    });

    txWrapperColors.forEach((color, txWrapperIndex) => {
      timeline
        // Stagger moving TxRectangles to middle of container
        .add({
          delay: anime.stagger(200),
          duration: 2000,
          easing: 'easeInOutSine',
          targets: `.${txRectClass}-${txWrapperIndex}`,
          translateX: (_target, i) => -((containerWidth * 1 / 4) + (i * txRecWidth * .5)),
        }, txWrapperIndex !== 0 ? '-=1400' : '+=0')
        // Aggregate TxRectangles into a block
        .add({
          duration: 1000,
          easing: 'easeInOutExpo',
          targets: `.${txRectClass}-${txWrapperIndex}`,
          translateX: (_target, i) => -8 + i * txRecWidth * .9,
          translateY: (_target, i) => 8 + (txWrapperIndex * blockHeight * .2),
        });
    })
  }

  useLayoutEffect(() => {
    runAnimation();
  }, []);

  return (
    <Layout date={page.date} title={page.title}>
      <AnimationContainer className="mt-5" ref={containerRef0} style={{ height: containerHeight }}>
      {txWrapperColors.map((color, txWrapperIndex) => (
        <TxWrapper className="tx-wrapper">
          {Array(txPerBlock).fill(null).map((_el, txRectangleIndex) => (
            <TxRectangle
              className={`${txRectClass} ${txRectClass}-${txWrapperIndex}`}
              key={`${txWrapperIndex}-${txRectangleIndex}`}
              style={{ // Initial Styles Part 1 - Hide and set properties, before render
                backgroundColor: color,
                height: `${blockHeight}px`,
                display: 'none',
              }}
            />
          ))}
        </TxWrapper>
      ))}
      </AnimationContainer>
    </Layout>
  );
}

/*
- Cardano transactions per second and congestion
- Transactions on a hydra head
- Multiple hydra heads
- What makes up a hydra head pool
- Hydra is a scaling solution, not a concurrency solution
- Compare with vertical scaling (Solana) and sharding (Ethereum)
- Hydra can be applied to other blockchains
- Resources: whitepaper, code
- Mobile styles
*/
