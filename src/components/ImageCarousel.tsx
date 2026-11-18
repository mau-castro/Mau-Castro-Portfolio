import { useState } from 'react';
import { useLanguage } from '../contexts/useLanguage';

interface ImageCarouselProps {
  images: string[];
  alt: string;
  fit?: 'cover' | 'contain';
  cover?: { src: string; logo?: string; alt: string };
  previewIndex?: number;
}

const ImageCarousel = ({ images, alt, fit = 'cover', cover, previewIndex }: ImageCarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [alternateReady, setAlternateReady] = useState(false);
  const { t } = useLanguage();
  const slides = cover ? [cover.src, ...images] : images;
  const isPreview = previewIndex !== undefined;
  const currentIndex = isPreview ? (alternateReady ? previewIndex : 0) : selectedIndex;

  const move = (direction: number) => {
    setSelectedIndex(index => (index + direction + slides.length) % slides.length);
  };

  return (
    <div className="project-gallery">
      <div className="gallery-stage" data-fit={fit}>
        {slides.map((src, index) => (
          <div
            key={src}
            className="gallery-slide"
            aria-hidden={index !== currentIndex}
            data-current={index === currentIndex}
            data-cover={Boolean(cover && index === 0)}
          >
            <img
              src={src}
              alt={(index === 0 && cover?.alt) || (slides.length > 1 ? `${alt} – ${index + 1}` : alt)}
              loading="lazy"
              onLoad={isPreview && index === 1 ? () => setAlternateReady(true) : undefined}
            />
            {index === 0 && cover?.logo && (
              <img className="gallery-cover-logo" src={cover.logo} alt="" loading="lazy" />
            )}
          </div>
        ))}
      </div>

      {!isPreview && slides.length > 1 && (
        <div className="gallery-controls" role="group" aria-label={alt}>
          <button type="button" onClick={() => move(-1)} aria-label={t('projects.previousImage')}>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5m6 6-6-6 6-6" />
            </svg>
          </button>
          <div className="gallery-index">
            {slides.map((src, index) => (
              <button
                key={src}
                type="button"
                aria-current={index === currentIndex}
                aria-label={`${t('projects.goToImage')} ${index + 1}`}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>
          <button type="button" onClick={() => move(1)} aria-label={t('projects.nextImage')}>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
