const Footer = () => {
    return (
        <footer className="bg-black py-16 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto text-center md:text-left md:flex justify-between items-end">
                <div className="mb-8 md:mb-0">
                    <div className="text-2xl font-bold text-white mb-4">DALTO</div>
                    <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                        <p>
                            강남 달토는 말만 그럴듯한 곳은 아닙니다.<br />
                            역삼동, 언주역, 삼정호텔 인근에서 오래 같은 방식으로 운영해온 곳입니다.
                        </p>
                        <p>
                            궁금한 게 있으면 오기 전에 물어보는 게 맞습니다.<br />
                            맞으면 오시고, 아니면 안 오셔도 됩니다.<br />
                            그게 강남 달토 운영 방식입니다.
                        </p>
                    </div>
                </div>

                <div className="text-gray-600 text-xs text-center md:text-right">
                    <p>&copy; {new Date().getFullYear()} Gangnam Dalto (Running Rabbit). All rights reserved.</p>
                    <p className="mt-2">Designed for Premium Experience</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
