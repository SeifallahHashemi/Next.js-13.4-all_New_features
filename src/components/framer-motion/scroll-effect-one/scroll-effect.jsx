import {motion, useScroll} from "framer-motion"
import LoremIpsum from "../../UI/lorem-ipsum";
const ScrollEffect = () => {
    const {scrollYProgress} = useScroll();
    return (
        <>
            <motion.div className={"progress-bar"} style={{ scaleX: scrollYProgress}}/>
            <h1>
                <code>useScroll</code> demo
            </h1>
            <LoremIpsum />
        </>
    );
};

export default ScrollEffect;