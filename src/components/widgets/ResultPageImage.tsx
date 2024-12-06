type ResultImage = {
    image: string;
    alt: string;
}
export default function ResultPageImage({image, alt}: ResultImage) {
    return (
        <img
            src={image}
            alt={alt}
            style={{
                position: 'absolute',
                height: '400%',
                opacity: 0.2,
                left: '-40px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1
            }}
        />
    );
}