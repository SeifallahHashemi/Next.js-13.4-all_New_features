import {useMotionTemplate, useMotionValue, useSpring, motion} from "framer-motion";
import {useLayoutEffect} from "react";
import {Property} from "csstype";
import Translate = Property.Translate;

const Spring = () => {
    const val = useMotionValue<Translate | undefined | number>(0);
    const dx = useSpring(val, {stiffness: 1000, damping: 10});
    useLayoutEffect(() => {
        setTimeout(() => {
            dx.set(500)
        }, 2000)
    }, [])
    const shadowX = useSpring(100)
    const shadowY = useMotionValue(100)

    const shadow = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 10px rgba(100,0,0,0.8))`
    return (
        <motion.div className={`w-52 h-52 bg-sky-700`} style={{x: dx, filter: shadow}}
                    transition={{duration: 10, loop: Infinity, ease: "linear"}}>
            hello world
        </motion.div>
    );
};

export default Spring;