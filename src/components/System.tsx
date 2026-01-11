import { motion } from 'framer-motion';
import { Phone, MapPin, Users, Music, CheckCircle } from 'lucide-react';

const steps = [
    {
        number: "01",
        title: "사전 문의",
        desc: "전화나 메시지로 인원, 시간 정도만 알려주시면 됩니다. 역삼동·언주역 이동도 체크해드립니다.",
        icon: Phone
    },
    {
        number: "02",
        title: "도착 및 입실",
        desc: "삼정호텔 근처라 위치 찾기가 쉽습니다. 도착하시면 대기 없이 바로 룸으로 안내합니다.",
        icon: MapPin
    },
    {
        number: "03",
        title: "설명 진행",
        desc: "주대, 이용 시간, 시스템을 투명하게 안내합니다. 복잡한 룰 없이 단순하게 진행됩니다.",
        icon: Users
    },
    {
        number: "04",
        title: "초이스",
        desc: "부담 주는 방식이 아닙니다. 원하시는 스타일 최대한 맞춰드리고 편하게 진행합니다.",
        icon: Music
    },
    {
        number: "05",
        title: "이용 후 선택",
        desc: "연장은 손님의 100% 선택입니다. 강요는 절대 없으며 깔끔하게 마무리됩니다.",
        icon: CheckCircle
    }
];

const System = () => {
    return (
        <section id="system" className="py-24 bg-brand-dark relative">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("/images/system.png")', backgroundSize: 'cover', backgroundAttachment: 'fixed' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <p className="text-brand-sapphire font-bold tracking-widest mb-2 uppercase text-sm">System</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">이용 시스템</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        달리는토끼, 런닝레빗 시절부터 유지해온 방식. 처음 오시는 분도 어렵지 않습니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="glass-card p-8 hover:bg-white/10 transition-colors group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <step.icon className="w-10 h-10 text-brand-silver group-hover:text-brand-sapphire transition-colors" />
                                <span className="text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors font-sans">{step.number}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-400 mb-6">런닝레빗, 달리는토끼 시절부터 이 구조는 거의 같습니다. <br className="md:hidden" />그래서 단골이 계속 이어집니다.</p>
                </div>
            </div>
        </section>
    );
};

export default System;
