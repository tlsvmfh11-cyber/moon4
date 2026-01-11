import { motion } from 'framer-motion';

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-brand-darker relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-0 w-full h-1/2 bg-brand-sapphire/5 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative order-2 lg:order-1"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                        <img
                            src="/images/pricing.png"
                            alt="강남 달토 가격 안내 - 투명한 주대 정책과 정찰제 운영"
                            width="1200"
                            height="800"
                            loading="lazy"
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-1 lg:order-2"
                >
                    <p className="text-brand-sapphire font-bold tracking-widest mb-2 uppercase text-sm">Pricing Strategy</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">투명한 가격 정책</h2>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                <span className="w-1 h-6 bg-brand-silver block rounded-full"></span>
                                주대 문의에 대하여
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                가장 많이 묻는 게 주대입니다. 요일, 시간대, 상황에 따라 달라질 수 있어
                                숫자를 박아두지 않는 대신, 문의 주시면 <span className="text-white font-semibold">그날 기준으로 정확히</span> 말씀드립니다.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                <span className="w-1 h-6 bg-brand-silver block rounded-full"></span>
                                약속은 반드시 지킵니다
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                중요한 건 사전에 안내한 기준에서 벗어나지 않는다는 점입니다.<br />
                                <span className="text-brand-sapphire/80">✔ 갑자기 추가 비용 붙는 구조 아님</span><br />
                                <span className="text-brand-sapphire/80">✔ 설명 없이 넘어가는 부분 없음</span>
                            </p>
                        </div>

                        <div className="p-6 glass-card border-l-4 border-l-brand-platinum">
                            <p className="text-lg text-white font-medium italic">
                                "강남 달토는 '싸다'라고 말하지 않습니다.<br />
                                대신 <span className="text-brand-sapphire">'이 정도면 이해된다'</span>는 기준으로 운영합니다."
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
