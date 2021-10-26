import anime from 'animejs';
import { useEffect, createRef, useRef } from 'react';

import AnimationContainer from 'components/AnimationContainer';
import Layout from 'components/Layout';
import MountDetector from 'components/MountDetector';
import TxRectangle from 'components/TxRectangle';
import TxWrapper from 'components/TxWrapper';

import { findPage } from 'config/pages';

const page = findPage('understanding-cardanos-hydra-scaling-solution-with-visualizations');

const txWrapperColors = ['orange', 'orange', 'orange', 'orange'];
const containerHeight = 200; // px
const blockHeight = containerHeight / 5; // px
const txPerBlock = 10;
const txRectClass = 'tx-rect';

// Render flow before running animations:
// 1. Render children after container has mounted
// useEffect, useState, useRef -> capture container width -> use render props to pass width to children

// 2. Start animation after children render

export default function UnderstandingCardanosHydraScalingSolutionWithVisualizations() {
  const containerRef0 = createRef();
  const timelineRef = useRef();

  const runAnimation = () => {
    const containerWidth = containerRef0.current.offsetWidth;
    const txRecWidth = containerWidth / 30;

    // Initial Styles Part 2 - Set pre-animation styles, now that width of the parent container can be calculated
    const txElements = [...document.querySelectorAll(`.${txRectClass}`)];
    txElements.forEach((el, i) => {
      el.style.opacity = '100';
      el.style.transform = `translateX(${-containerWidth}px) translateY(${(containerHeight * 3 / 8) - Math.floor(i / txPerBlock) * blockHeight}px)`;
    });

    // Start animation timeline
    timelineRef.current = anime.timeline({
      complete: () => { runAnimation() },
    });

    // timelineRef.current.add({
    //   duration: 0,
    //   targets: `.${txRectClass}`,
    //   opacity: 100,
    //   translateX: `${-containerWidth}px`,
    //   // translateY: (_target, i) => `${(containerHeight * 3 / 8) - Math.floor(i / txPerBlock) * blockHeight}px)}`,
    // });

    txWrapperColors.forEach((color, txWrapperIndex) => {
      timelineRef.current
        // Stagger moving TxRectangles to middle of container
        .add({
          delay: (_target, i) => (800 + (i * 160)),
          duration: 1000,
          easing: 'easeInOutSine',
          targets: `.${txRectClass}-${txWrapperIndex}`,
          translateX: (_target, i) => -((containerWidth * 1 / 4) + (i * txRecWidth * .5)),
        }, txWrapperIndex !== 0 ? '-=1400' : '+=0')
        // Aggregate TxRectangles into a block
        .add({
          duration: 600,
          easing: 'easeInOutExpo',
          targets: `.${txRectClass}-${txWrapperIndex}`,
          translateX: (_target, i) => -8 + i * txRecWidth * .9,
          translateY: (_target, i) => 8 + (txWrapperIndex * blockHeight * .2),
        });
    });
  }

  useEffect(() => () => { timelineRef.current.pause() }, []);

  return (
    <Layout date={page.date} title={page.title}>
      <AnimationContainer
        className="mt-5"
        ref={containerRef0}
        style={{ height: containerHeight }}
      >
        {({ containerWidth }) => {
          const txRecWidth = containerWidth / 30;

          return (
            <>
              <MountDetector onMount={runAnimation} />
              {txWrapperColors.map((color, txWrapperIndex) => (
                <TxWrapper key={`tx-wrapper-${txWrapperIndex}`} className="tx-wrapper">
                  {Array(txPerBlock).fill(null).map((_el, txRectangleIndex) => (
                    <TxRectangle
                      className={`${txRectClass} ${txRectClass}-${txWrapperIndex}`}
                      key={`${txWrapperIndex}-${txRectangleIndex}`}
                      style={{ // Initial Styles Part 1 - Hide and set properties, before render
                        backgroundColor: color,
                        height: `${blockHeight}px`,
                        width: `${txRecWidth}px`,
                        opacity: 0,
                      }}
                    />
                  ))}
                </TxWrapper>
              ))}
            </>
          );
        }}
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
- Other benefits: lower fees, faster finality, more grunular transaction amounts (in lovelace)
- No token
- Resources: whitepaper, code
- Mobile styles
*/
