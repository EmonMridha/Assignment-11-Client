import { useLoaderData } from 'react-router';
import Banner from './Banner';
import VolunteerNeedsNow from './VolunteerNeedsNow';
import { useEffect } from 'react';
import Testimonials from './Testimonials';
import Tips from './Tips';
import { motion } from 'framer-motion';

const Home = () => {
    useEffect(()=>{
        document.title='Home - Voluntopia';
    },[])

    const posts = useLoaderData();

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const staggerContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.3 } }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            {/* Banner Section */}
            <motion.div variants={fadeInUp}>
                <Banner />
            </motion.div>

            {/* Volunteer Needs Section */}
            <motion.div variants={fadeInUp}>
                <VolunteerNeedsNow posts={posts} />
            </motion.div>

            {/* Testimonials Section */}
            <motion.div variants={fadeInUp}>
                <Testimonials />
            </motion.div>

            {/* Tips Section */}
            <motion.div variants={fadeInUp}>
                <Tips />
            </motion.div>
        </motion.div>
    );
};

export default Home;
