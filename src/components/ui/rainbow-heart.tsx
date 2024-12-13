import { Heart } from 'lucide-react';

type Stop = { offset: string; color: string };
type GradientSettings = { id: string; stops: Stop[] };

// Define gradient configurations for different pride flags
const gradients: Record<string, GradientSettings> = {
  rainbow: {
    id: 'rainbowGradient',
    stops: [
      { offset: '0%', color: 'red' },
      { offset: '16.67%', color: 'orange' },
      { offset: '33.33%', color: 'yellow' },
      { offset: '50%', color: 'green' },
      { offset: '66.67%', color: 'blue' },
      { offset: '83.33%', color: 'indigo' },
      { offset: '100%', color: 'violet' },
    ],
  },
  trans: {
    id: 'transPrideGradient',
    stops: [
      { offset: '0%', color: '#55CDFC' },
      { offset: '50%', color: '#F7A8B8' },
      { offset: '100%', color: '#FFFFFF' },
    ],
  },
  pride: {
    id: 'classicPrideGradient',
    stops: [
      { offset: '0%', color: '#E50000' },
      { offset: '16.67%', color: '#FF8D00' },
      { offset: '33.33%', color: '#FFEE00' },
      { offset: '50%', color: '#008121' },
      { offset: '66.67%', color: '#004CFF' },
      { offset: '83.33%', color: '#760188' },
    ],
  },
};

const PrideHeart = ({ size = 48, variant = 'rainbow', className = '' }) => {
  const selectedGradient = gradients[variant];

  return (
    <div className="relative inline-block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className={`absolute top-0 left-0 z-10 ${className}`}
      >
        <defs>
          <linearGradient
            id={selectedGradient.id}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            {selectedGradient.stops.map((stop, index) => (
              <stop key={index} offset={stop.offset} stopColor={stop.color} />
            ))}
          </linearGradient>
        </defs>
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill={`url(#${selectedGradient.id})`}
        />
      </svg>
      <Heart size={size} className="text-gray-300" strokeWidth={1.5} />
    </div>
  );
};

export default PrideHeart;
