import {motion} from 'framer-motion' ;
import { Link } from "react-router-dom";


export default function Featured(){
    return (
        <section className='bg-[#0f0f0f] text-white py-12 px-6'>
            <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center'>
                 <motion.div 
                 initial={{opacity:0 , x :-100}}
                 whileInView={{opacity:1 , x:0}}
                 transition={{type: 'spring', stiffness: 120}}
                 viewport={{once: true}}
                 >
                    <h2 className='text-4xl font-bold mb-4 leading-tight'>
                    Featured Story of the Month 🚀
                    </h2>
                    <p className='text-gray-400 mb-6'>
                    Discover this month's most inspiring post curated by our editors. 
                    Get insights, dive deep into unique perspectives, and connect with like-minded writers.
                    </p>
                    <Link to="/posts" className="inline-block bg-teal-500 hover:bg-teal-600 transition-all px-6 py-2 rounded-xl font-semibold text-lg">
                    Explore Posts
                    </Link>
                </motion.div>
                <motion.div 
                initial={{opacity: 0 , x:50}}
                whileInView={{opacity:1 ,x:0}}
                transition={{type: "spring",stiffness: 120}}
                viewport={{once: true}}
                className='flex jusitfy-center'
                >
                  <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" alt="Featured" className='rounded-2xl shadow-lg w-full h-auto object-cover'/>
                </motion.div>
            </div>
        </section>
    )
}