import React from 'react';
import AnimatedCursor from "react-animated-cursor"

const AnimationCursor = () => {
    return (
        <AnimatedCursor
      innerSize={8}
      outerSize={50}
      color='235, 74, 74'
      outerAlpha={0.2}
      innerScale={0.1}
      outerScale={2}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    );
};

export default AnimationCursor;