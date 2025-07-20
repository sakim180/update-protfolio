// components/RotatingOrbit.js
import Image from 'next/image';

const icons = [
    { src: '/javascript.png', alt: 'Javascript' },
    { src: '/typescript.png', alt: 'typescript' },
    { src: '/mongodb.png', alt: 'MongoDB' },
    { src: '/next.png', alt: 'Next' },
    { src: '/git.png', alt: 'Git' },
    { src: '/tailwind.png', alt: 'Tailwind' },
    { src: '/graphql.png', alt: 'Garphql' },
    { src: '/python.png', alt: 'Python' },
    { src: '/java.webp', alt: 'Java' },
    { src: '/tensorflow.jpg', alt: 'Tensorflow' },
    { src: '/keras.png', alt: 'Keras' },
    { src: '/opencv.png', alt: 'OpenCV' },
    { src: '/sklearn.png', alt: 'SKLearn' },
    { src: '/pandas.png', alt: 'Pandas' },
];

export default function RotatingOrbit() {
    const primaryIcons = icons.slice(0, 5);
    const secondaryIcons = icons.length > 5 ? icons.slice(5) : [];

    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden mt-8">
            {/* Primary Orbit */}
            <div className="absolute w-[200px] h-[200px] rounded-full animate-spin-slow">
                {primaryIcons.map((icon, index) => (
                    <div
                        key={index}
                        className="absolute top-1/2 left-1/2"
                        style={{
                            transform: `rotate(${index * (360 / primaryIcons.length)}deg) translate(100px) rotate(-${index * (360 / primaryIcons.length)}deg)`,
                        }}
                    >
                        <Image
                            src={icon.src}
                            alt={icon.alt}
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                    </div>
                ))}
            </div>

            {/* Secondary Orbit */}
            {secondaryIcons.length > 0 && (
                <div className="absolute w-[425px] h-[425px] rounded-full animate-spin-slow-reverse">
                    {secondaryIcons.map((icon, index) => (
                        <div
                            key={index}
                            className="absolute top-1/2 left-1/2"
                            style={{
                                transform: `rotate(${index * (360 / secondaryIcons.length)}deg) translate(200px) rotate(-${index * (360 / secondaryIcons.length)}deg)`,
                            }}
                        >
                            <Image
                                src={icon.src}
                                alt={icon.alt}
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
