import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/images/hero.png")' }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/20 to-brand-dark" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-brand-sapphire font-bold tracking-[0.2em] mb-4 uppercase text-sm md:text-base">Running Rabbit</h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
                        강남 <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-silver">달토</span>
                        <br />
                        <span className="text-2xl md:text-3xl font-light text-gray-400 mt-2 block tracking-normal">실제 운영 방식 정리</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        역삼동 삼정호텔 인근 하이퍼블릭.<br className="md:hidden" />
                        달리는토끼·런닝레빗 이용 안내를<br />
                        현장 그대로 설명해 드립니다.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#intro" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all hover:scale-105">
                            자세히 보기
                        </a>
                        <a href="#contact" className="px-8 py-4 bg-brand-sapphire text-white rounded-full font-bold shadow-lg hover:bg-blue-600 transition-all hover:scale-105 shadow-brand-sapphire/30">
                            예약 문의
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
