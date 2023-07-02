import { motion, AnimatePresence } from "framer-motion";
export default function ErrMsg({ errors }: any) {
    const animation = {
        hidden: { y: -10, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { opacity: 0 },
    };
    return (
        <AnimatePresence initial={false} mode={"wait"}>
            {errors?.message && (
                <motion.p
                    variants={animation}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-red-500 font-semibold text-sm"
                >
                    {errors?.message}
                </motion.p>
            )}
        </AnimatePresence>
    );
}
