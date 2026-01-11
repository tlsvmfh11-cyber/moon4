import { motion } from 'framer-motion';
import { Phone, MessageCircle, Car, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-brand-darker to-black text-center px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-brand-sapphire font-bold tracking-widest mb-2 uppercase text-sm">Reservation</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">예약 및 픽업 안내</h2>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-12 backdrop-blur-sm">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 text-gray-300">
                            <div className="flex items-center gap-3">
                                <Car className="text-brand-silver w-6 h-6" />
                                <span>강남권 픽업 가능 (사전 문의)</span>
                            </div>
                            <div className="hidden md:block w-px h-6 bg-white/10" />
                            <div>
                                역삼동·언주역 인근 이동 지원
                            </div>
                        </div>

                        <p className="text-lg text-white mb-8">
                            예약하실 때는 어렵게 생각하지 마세요.<br className="md:hidden" />
                            <span className="font-bold text-brand-sapphire">인원, 시간, 방문 형태</span> 정도만 알려주셔도 충분합니다.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                            <a
                                href="tel:01023033778"
                                className="flex items-center justify-center gap-3 px-8 py-5 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all text-lg group"
                            >
                                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                전화 문의
                            </a>
                            <a
                                href="sms:01023033778"
                                className="flex items-center justify-center gap-3 px-8 py-5 bg-brand-sapphire text-white rounded-full font-bold hover:bg-blue-600 transition-all text-lg shadow-lg shadow-brand-sapphire/30 group"
                            >
                                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                문자 문의
                            </a>
                            <a
                                href="https://t.me/hscompanyshs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 px-8 py-5 bg-[#0088cc] text-white rounded-full font-bold hover:bg-[#006699] transition-all text-lg shadow-lg shadow-[#0088cc]/30 group"
                            >
                                <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                텔레그램
                            </a>
                        </div>
                    </div>

                    <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                        삼정호텔 근처라 위치 설명도 간단합니다.<br />
                        처음 달토 오시는 분도, 달리는토끼·런닝레빗으로 알고 있던 분도<br className="hidden md:block" />
                        편하게 문의 주셔도 됩니다.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
