import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Users, 
  Wind, 
  Compass,
  CheckCircle2,
  Clock,
  ExternalLink
} from 'lucide-react';

interface Itinerary {
  id: number;
  title: string;
  location: string;
  image: string;
  credits: number;
  architecture: string;
  vibe: string;
  capacity: string;
  description: string;
}

const ITINERARIES: Record<string, Itinerary> = {
  '1': {
    id: 1,
    title: "The Cloud Residence",
    location: "Ali Mountain, Taiwan",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80",
    credits: 4200,
    architecture: "Cloud Integration",
    vibe: "Mist & Tea Leaves",
    capacity: "4 Guests",
    description: "Nestled high in the Ali Mountain ranges, this residence is designed to be literally within the clouds. The structure uses treated timber and floor-to-ceiling glass to dissolve the boundary between guest and forest."
  },
  '2': {
    id: 2,
    title: "Oceanic Serenity",
    location: "Hualien Coast, Taiwan",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80",
    credits: 5800,
    architecture: "Pacific Minimalist",
    vibe: "Salt & Indigo",
    capacity: "6 Guests",
    description: "Perched on the edge of the Pacific, this Hualien sanctuary is an exercise in restraint. The sound of breaking waves is the only soundtrack, and the sunrise is the only clock."
  },
  '3': {
    id: 3,
    title: "Minimalist Sanctuary",
    location: "Taichung Hills",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80",
    credits: 3500,
    architecture: "Zen Concrete",
    vibe: "Stillness & Stone",
    capacity: "2 Guests",
    description: "A private retreat for those who seek the luxury of silence. The residence features a dedicated meditation chamber and a rock garden that mirrors the rolling Taichung hills."
  },
  '4': {
    id: 4,
    title: "Bamboo Grove Villa",
    location: "Nantou Valley",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80",
    credits: 4900,
    architecture: "Organic Framework",
    vibe: "Greenery & Wind",
    capacity: "8 Guests",
    description: "Surrounded by a thousand bamboo trees, this Nantou residence uses wind patterns to naturally cool the spaces. The interior features handcrafted furniture from locally sourced bamboo and wood."
  },
  '5': {
    id: 5,
    title: "Obsidian Retreat",
    location: "Taitung Ridge",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    credits: 7200,
    architecture: "Volcanic Brutalism",
    vibe: "Iron & Fire",
    capacity: "4 Guests",
    description: "Located on the volcanic ridge of Taitung, this dark-themed residence is built from lava stone. It offers a raw, primal connection to the earth's heat and the surrounding stars."
  }
};

export default function ItineraryDetail() {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id && ITINERARIES[id]) {
      setItinerary(ITINERARIES[id]);
    } else {
      navigate('/itineraries');
    }
    window.scrollTo(0, 0);
  }, [id, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (!itinerary) return null;

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 font-sans">
      {/* Immersive Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0"
        >
          <img 
            src={itinerary.image} 
            alt={itinerary.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-6 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/itineraries" className="inline-flex items-center text-gold-500/60 hover:text-gold-500 text-[10px] tracking-widest uppercase mb-6 transition-colors">
              <ArrowLeft size={12} className="mr-2" />
              {t('details.back')}
            </Link>
            <div className="flex items-center space-x-2 text-gold-500/80 mb-2">
              <MapPin size={14} />
              <span className="text-[10px] tracking-[0.3em] uppercase font-light">{itinerary.location}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-light italic leading-none">{itinerary.title}</h1>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Manifesto & Details */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-[1px] w-12 bg-gold-500/30" />
                <span className="text-gold-500 text-[11px] tracking-[0.4em] uppercase font-medium">{t('details.manifesto_title')}</span>
              </div>
              
              <p className="text-white/60 text-lg leading-[1.8] font-light mb-12 italic">
                "{itinerary.description}"
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-white/5">
                <div className="flex flex-col">
                  <span className="text-gold-500/40 text-[9px] tracking-widest uppercase mb-2 font-medium flex items-center">
                    <Compass size={12} className="mr-2" />
                    {t('details.architecture')}
                  </span>
                  <span className="text-sm font-light text-white/80">{itinerary.architecture}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gold-500/40 text-[9px] tracking-widest uppercase mb-2 font-medium flex items-center">
                    <Wind size={12} className="mr-2" />
                    {t('details.vibe')}
                  </span>
                  <span className="text-sm font-light text-white/80">{itinerary.vibe}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gold-500/40 text-[9px] tracking-widest uppercase mb-2 font-medium flex items-center">
                    <Users size={12} className="mr-2" />
                    {t('details.capacity')}
                  </span>
                  <span className="text-sm font-light text-white/80">{itinerary.capacity}</span>
                </div>
              </div>

              <div className="mt-16 grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] bg-white/5 rounded-2xl overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700">
                  <img src="https://images.unsplash.com/photo-1449156001935-d28605253603?auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/5] bg-white/5 rounded-2xl overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700 mt-12">
                  <img src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Registration Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-zinc-900/40 backdrop-blur-3xl border border-gold-500/20 rounded-[2.5rem] p-10 shadow-2xl shadow-black"
              >
                {!submitted ? (
                  <form onSubmit={handleSubmit}>
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <h3 className="text-2xl font-serif mb-1">{t('details.apply')}</h3>
                        <p className="text-white/40 text-[10px] leading-relaxed max-w-[200px]">
                          {t('details.apply_desc')}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="block text-[9px] text-gold-500 uppercase tracking-widest mb-1">{t('details.credits_required')}</span>
                        <span className="text-2xl font-serif text-gold-400 italic">{itinerary.credits.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="space-y-6 mb-10">
                      <div className="group border-b border-white/10 pb-2 focus-within:border-gold-500/50 transition-colors">
                        <label className="block text-[9px] text-white/30 uppercase tracking-[0.2em] mb-2">{t('details.form.name')}</label>
                        <input 
                          type="text" 
                          required
                          className="w-full bg-transparent outline-none text-sm font-light placeholder:text-white/10"
                          placeholder="Johnathan Doe"
                        />
                      </div>
                      <div className="group border-b border-white/10 pb-2 focus-within:border-gold-500/50 transition-colors">
                        <label className="block text-[9px] text-white/30 uppercase tracking-[0.2em] mb-2">{t('details.form.email')}</label>
                        <input 
                          type="email" 
                          required
                          className="w-full bg-transparent outline-none text-sm font-light placeholder:text-white/10"
                          placeholder="member@pangolin.club"
                        />
                      </div>
                      <div className="group border-b border-white/10 pb-2 focus-within:border-gold-500/50 transition-colors">
                        <label className="block text-[9px] text-white/30 uppercase tracking-[0.2em] mb-2">{t('details.form.dates')}</label>
                        <div className="flex items-center">
                          <Calendar size={14} className="text-gold-500/40 mr-2" />
                          <input 
                            type="text" 
                            required
                            className="w-full bg-transparent outline-none text-sm font-light placeholder:text-white/10"
                            placeholder="Oct 12 - Oct 20, 2024"
                          />
                        </div>
                      </div>
                      <div className="group border-b border-white/10 pb-2 focus-within:border-gold-500/50 transition-colors">
                        <label className="block text-[9px] text-white/30 uppercase tracking-[0.2em] mb-2">{t('details.form.note')}</label>
                        <textarea 
                          className="w-full bg-transparent outline-none text-sm font-light placeholder:text-white/10 resize-none h-20"
                          placeholder="Dietary requirements or special logistics..."
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full group relative h-14 overflow-hidden rounded-full mb-6 border border-gold-500/30"
                    >
                      <div className="absolute inset-0 bg-gold-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      <span className="relative z-10 text-[11px] font-bold tracking-[0.3em] uppercase flex items-center justify-center group-hover:text-black transition-colors">
                        {loading ? (
                          <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                          />
                        ) : (
                          t('details.request_btn')
                        )}
                      </span>
                    </button>

                    <div className="flex items-center justify-center space-x-6">
                      <div className="flex items-center text-[9px] text-white/30 uppercase tracking-widest">
                        <Clock size={10} className="mr-1" />
                        24h Resp.
                      </div>
                      <div className="flex items-center text-[9px] text-white/30 uppercase tracking-widest">
                        <CheckCircle2 size={10} className="mr-1" />
                        Verified
                      </div>
                    </div>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold-500/20">
                      <CheckCircle2 size={32} className="text-gold-500" />
                    </div>
                    <h3 className="text-2xl font-serif mb-4 italic">Request Transmitted</h3>
                    <p className="text-white/40 text-sm font-light leading-relaxed mb-8 px-4">
                      {t('details.form.success')}
                    </p>
                    <button 
                      onClick={() => navigate('/itineraries')}
                      className="text-gold-500 text-[10px] tracking-[0.3em] font-bold uppercase hover:opacity-70"
                    >
                      {t('details.back')}
                    </button>
                  </motion.div>
                )}
              </motion.div>

              <div className="mt-8 px-4 flex justify-between">
                <div className="group cursor-pointer">
                  <span className="block text-[8px] text-white/20 uppercase tracking-widest mb-1 group-hover:text-gold-500 transition-colors italic">Member Benefits</span>
                  <div className="flex items-center text-[10px] text-white/40 group-hover:text-white transition-colors">
                    Private Jet Access <ExternalLink size={10} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="group cursor-pointer text-right">
                  <span className="block text-[8px] text-white/20 uppercase tracking-widest mb-1 group-hover:text-gold-500 transition-colors italic">Share Selection</span>
                  <div className="flex items-center justify-end text-[10px] text-white/40 group-hover:text-white transition-colors">
                    Secure Link
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
