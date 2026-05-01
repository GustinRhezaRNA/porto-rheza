import React from 'react'

const stars = Array.from({ length: 100 }, () => ({
    size: Math.random() * 2 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 1 + 2, // 2s to 3s
    opacity: Math.random() * 0.5 + 0.2,
    scale: Math.random() * 0.5 + 0.7, // Random base scale
}))

const Stars = () => {
    return (
        <div className="absolute inset-0 pointer-events-none z-10">
            {stars.map((star, i) => (
                <span
                    key={i}
                    className="absolute bg-white rounded-full animate-twinkle"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        animationDelay: `${star.delay}s`,
                        animationDuration: `${star.duration}s`,
                        opacity: star.opacity,
                        "--star-scale": star.scale,
                    } as React.CSSProperties}
                />
            ))}
        </div>
    )
}

export default Stars