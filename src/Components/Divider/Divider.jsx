
const Divider = () => {

    return (
        <div className="py-6 my-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 p-4 container mx-auto my-16 shadow-xl">
                <div className="w-full h-96 bg-no-repeat bg-cover rounded-xl bg-center" style={{ backgroundImage: "url('https://i.ibb.co/jMDF8Y9/1.jpg')" }}>
                </div>
                <div className="w-full h-96 bg-no-repeat bg-cover md:col-span-2 rounded-xl bg-center" style={{ backgroundImage: "url('https://i.ibb.co/gVc9xjy/2.jpg')" }}>
                </div>
                <div className="w-full h-96 bg-no-repeat bg-cover rounded-xl bg-center" style={{ backgroundImage: "url('https://i.ibb.co/LQ1DmgS/3.jpg')" }}>
                </div>
                <div className="w-full h-96 bg-no-repeat bg-cover rounded-xl md:col-span-2 bg-center" style={{ backgroundImage: "url('https://i.ibb.co/z2LhNRN/4.jpg')" }}>
                </div>
                <div className="w-full h-96 bg-no-repeat bg-cover rounded-xl bg-center" style={{ backgroundImage: "url('https://i.ibb.co/7QzcP5C/5.jpg')" }}>
                </div>
                <div className="w-full h-96 bg-no-repeat bg-cover rounded-xl bg-center" style={{ backgroundImage: "url('https://i.ibb.co/PcZ7BnP/6.jpg')" }}>
                </div>
                <div className="w-full h-96 bg-no-repeat bg-cover rounded-xl bg-center" style={{ backgroundImage: "url('https://i.ibb.co/fCtjMjg/7.jpg')" }}>
                </div>
                <div className="w-full h-96 bg-no-repeat bg-cover rounded-xl bg-center" style={{ backgroundImage: "url('https://i.ibb.co/rpXyMG1/8.jpg')" }}>
                </div>
                <div className="w-full h-96 bg-no-repeat bg-cover rounded-xl md:col-span-2 bg-center" style={{ backgroundImage: "url('https://i.ibb.co/wrPvS1D/9.jpg')" }}>
                </div>
                <div className="w-full h-96 bg-no-repeat bg-cover rounded-xl md:col-span-4" style={{ backgroundImage: "url('https://i.ibb.co/GsmNHH1/10.jpg')" }}>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="bg-no-repeat bg-cover bg-fixed w-full relative  hero-overlay" style={{ backgroundImage: "url('https://i.ibb.co/pRnv5x6/11.jpg')" }}>
                    <div className="bg-black bg-opacity-60 w-full h-full flex flex-col items-center justify-center py-48">
                        <h1 className="text-5xl text-white font-bold mb-9 mx-2">Explore You Creativity</h1>
                        <p className="text-center text-gray-300 text-lg mx-8 lg:mx-60">
                            Invites you to embark on a journey of self-expression and innovation. Whether you're an artist, writer, musician, or simply someone with a passion for creativity, this platform provides the tools, inspiration, and community support you need to unleash your potential. Dive into a world of endless possibilities where your unique ideas can flourish, connect with like-minded individuals, and discover new ways to bring your visions to life. Let your imagination soar and see where your creativity can take you.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Divider;