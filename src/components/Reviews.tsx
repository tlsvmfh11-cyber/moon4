import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        tag: "혼자 방문",
        content: "혼자 가는 거라 걱정했는데 생각보다 편했어요. 강남 달토 처음이었는데 달리는토끼랑 같은 곳이라고 설명해줘서 이해됐고, 가격도 미리 말해줘서 마음 편했습니다.",
        author: "방문객 A님"
    },
    {
        tag: "재방문",
        content: "예전에 런닝레빗으로 알던 곳이 달토라고 해서 다시 갔는데 운영 방식은 그대로더라고요. 역삼동 쪽에서 이만한 곳 찾기 쉽지 않습니다.",
        author: "단골 B님"
    },
    {
        tag: "위치 만족",
        content: "언주역에서 가깝고 삼정호텔 근처라 찾기 쉬웠습니다. 괜히 헤매는 거 싫은데 그 점은 좋았어요.",
        author: "방문객 C님"
    },
    {
        tag: "설명 부분",
        content: "강남 달토는 설명을 많이 해줘서 좋았습니다. 달리는토끼 처음이라 긴장했는데 부담 없이 진행됐어요.",
        author: "첫방문 D님"
    }
];

const Reviews = () => {
    return (
        <section id="reviews" className="py-24 bg-brand-dark relative">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/images/reviews.png")', backgroundSize: 'cover' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <p className="text-brand-sapphire font-bold tracking-widest mb-2 uppercase text-sm">Real Reviews</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">이용 고객 후기</h2>
                    <p className="text-gray-400 mt-4">실제 다녀가신 분들의 솔직한 이야기입니다.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 relative"
                        >
                            <Quote className="absolute top-6 right-6 text-white/10 w-10 h-10" />
                            <span className="inline-block px-3 py-1 bg-brand-sapphire/20 text-brand-sapphire text-xs font-bold rounded-full mb-4">
                                {review.tag}
                            </span>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                "{review.content}"
                            </p>
                            <div className="flex items-center justify-between border-t border-white/5 pt-4">
                                <span className="text-sm text-gray-400">{review.author}</span>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-brand-sapphire fill-brand-sapphire" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
