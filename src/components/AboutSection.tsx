import { useLanguage } from '../contexts/LanguageContext';
import ProfilePhoto from '../assets/Imagenes/ProfilePhoto.jpeg';
const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Section */}
          <div className="order-2 md:order-1">
            <div className="relative">
              {/* Placeholder for profile image */}
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center overflow-hidden shadow-2xl">
                {/* Puedes reemplazar esto con tu foto */}
                <img 
                    src={ProfilePhoto} 
                    alt={t('about.profileAlt') || 'Profile photo'} 
                    className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-8 -right-8 w-72 h-72 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -z-10 -bottom-8 -left-8 w-72 h-72 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('about.title')}
            </h2>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                {t('about.paragraph1')}
              </p>
              
              <p>
                {t('about.paragraph2')}
              </p>
              
              <p>
                {t('about.paragraph3')}
              </p>
            </div>

            {/* Stats or highlights */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {t('about.stat1Value')}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {t('about.stat1Label')}
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {t('about.stat2Value')}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {t('about.stat2Label')}
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">
                  {t('about.stat3Value')}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {t('about.stat3Label')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
