import { motion } from 'framer-motion';

const Intro = () => {
    return (
        <section id="intro" className="py-24 bg-brand-darker relative overflow-hidden">
            {/* Decorative blur */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-sapphire/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-brand-sapphire font-bold tracking-widest mb-2 uppercase text-sm">Introduction</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">강남 달토 소개</h2>

                    <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                        <p>
                            강남에서 달토 찾는 분들 대부분이 비슷한 상황입니다.
                            강남 달토를 검색하다 보면 <span className="text-white font-semibold">달리는토끼, 런닝레빗, 달토</span>라는 이름이 같이 나오고,
                            위치도 역삼동·언주역·삼정호텔 근처라고 나오는데 막상 정확한 설명은 잘 없습니다.
                        </p>
                        <p className="p-6 bg-white/5 border-l-4 border-brand-sapphire rounded-r-xl italic">
                            "이 페이지는 광고처럼 꾸민 글이 아닙니다. 강남 달토에서 실제로 손님 응대하면서 설명하는 내용을 정리한 글입니다."
                        </p>
                        <p>
                            달토를 처음 접하는 분, 달리는토끼가 뭔지 헷갈리는 분, 런닝레빗이랑 같은 곳인지 궁금한 분들한테 도움이 되도록 쓴 내용입니다.
                            강남 달토는 역삼동 삼정호텔 인근에 있고, 언주역에서도 접근이 편한 편입니다.
                        </p>
                        <p>
                            이 위치 때문에 예전부터 달리는토끼, 런닝레빗이라는 이름으로도 많이 불려왔고, 지금은 달토라는 이름으로 더 많이 알려져 있습니다.
                        </p>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        <img
                            src="/images/intro.jpg"
                            alt="강남 달토 인테리어 - 역삼동 삼정호텔 인근 프리미엄 하이퍼블릭 시설"
                            width="800"
                            height="1000"
                            loading="lazy"
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        />

                        <div className="absolute bottom-0 left-0 p-8 z-20">
                            <p className="text-white font-bold text-xl mb-2">프리미엄 시설</p>
                            <p className="text-gray-300 text-sm">최고급 음향시설과 프라이빗 룸 완비</p>
                        </div>
                    </div>

                    {/* Decoration */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-white/10 rounded-full z-0 animate-float" />
                </motion.div>
            </div>
        </section>
    );
};

export default Intro;
