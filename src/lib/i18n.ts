import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: { experiences: 'EXPERIENCES', club: 'THE CLUB', lounge: 'LOUNGE', entry: 'LEVEL ENTRY' },
      hero: { est: 'EST. 2024 • INVITATION ONLY', title1: 'Formosan', title2: 'Pangolin Club', desc: 'A private collective for connoisseurs of architectural rarity. Find resonance found in salt, stone, and the distant hum of night jazz.', cta: 'Inquire Availability', manifesto: 'The Manifesto', scroll: 'Scroll to Discover' },
      features: {
        sanctuary: { title: 'Rare Sanctuary', desc: 'Access to private villas that are never listed on public platforms. Authenticity is our highest luxury.' },
        rhythm: { title: 'Curated Rhythm', desc: 'Every journey is paced like a jazz improvisation. Relaxed, unexpected, and perfectly resonant.' },
        kinship: { title: 'Elite Kinship', desc: 'Connect with individuals of shared stature. Our shared values are the foundation of every dialogue.' }
      },
      philosophy: {
        title1: 'The Elegance of', title2: 'Patience',
        desc: 'Like the pangolin, we value depth over speed. Our club is not for the hurried, but for those who understand that the finest experiences require time, intention, and a sense of stillness.',
        cta: 'DISCOVER OUR PHILOSOPHY',
        retention: 'Member Retention'
      },
      itineraries: { 
        seasonal: 'Seasonal Collections', title: 'Private Sanctuaries', desc: 'Exclusive residences curated for their architectural significance and unmatched intimacy.', credits: 'Travel Credits', details: 'Details',
        request: { title: 'Request a Location', desc: 'Seeking a destination not listed in our standard collection? Our concierge can curate a private residence specifically for your needs.', cta: 'CONTACT CONCIERGE' }
      },
      details: {
        apply: 'Apply for Residency',
        apply_desc: 'Limited availability for Q3/Q4. Members may request up to 14 days per stay.',
        request_btn: 'Submit Request',
        credits_required: 'Credits Required',
        architecture: 'Architecture',
        vibe: 'Atmosphere',
        capacity: 'Capacity',
        manifesto_title: 'The Narrative',
        back: 'Back to Collection',
        form: {
          name: 'Legal Name',
          email: 'Secure Email',
          dates: 'Preferred Dates',
          note: 'Special Requirements / Notes',
          success: 'Your request has been transmitted to the concierge.'
        }
      },
      lounge: {
        welcome: 'Welcome back,', founding: 'Founding Member',
        desc: 'The world moves at your pace here. Your next sanctuary is awaiting your arrival.',
        benefit: 'Current Exclusive Benefit',
        benefit_desc: 'As a Founding Member, you have early access to the upcoming "Celestial Ridge" opening in Q4. Private walk-throughs can be arranged via your concierge.',
        expires: 'EXPIRES IN {{days}} DAYS',
        discovery: 'Recent Collective Discovery',
        concierge: 'Request Concierge',
        exit: 'Exit Lounge',
        stats: { credits: 'Credits', residencies: 'Residencies' }
      },
      login: {
        title: 'Entry',
        subtitle: 'Member Authentication',
        google: 'ENTRY WITH GOOGLE',
        restricted: 'Access is restricted to verified members.',
        request: 'Request an Invitation',
        error: 'Member entry denied. Please check your credentials.'
      }
    }
  },
  'zh-TW': {
    translation: {
      nav: { experiences: '選品行程', club: '俱樂部簡介', lounge: '成員酒廊', entry: '進場登錄' },
      hero: { est: '創立於 2024 • 邀請制', title1: '寶島', title2: '穿山甲俱樂部', desc: '為建築奇蹟與深度體驗愛好者打造的私人空間。在鹽、石與深夜爵士樂的殘響中尋求共鳴。', cta: '預約諮詢', manifesto: '品牌宣言', scroll: '向下探索' },
      features: {
        sanctuary: { title: '稀有避世所', desc: '造訪從不在公開平台上架的私人別墅。真實感是我們最極致的奢華。' },
        rhythm: { title: '策劃律動', desc: '每一段旅程都如同爵士即興般的節奏。放鬆、驚喜，且完美共振。' },
        kinship: { title: '精英群體', desc: '與志同道合的各界領袖建立連結。共同的價值觀是每段對話的基石。' }
      },
      philosophy: {
        title1: '優雅的', title2: '耐心',
        desc: '如同穿山甲，我們重視深度而非速度。我們的俱樂部不為匆忙而生，而是為了那些懂得極致體驗需要時間、意圖與內心寧靜的人。',
        cta: '探索品牌哲學',
        retention: '成員留存率'
      },
      itineraries: { 
        seasonal: '季節限定選品', title: '私密避世所', desc: '因其建築意義與無比親密感而策劃的專屬居所。', credits: '旅行積分', details: '詳情',
        request: { title: '特殊地點申請', desc: '在標準系列中找不到心儀的目的地？我們的禮賓官能為您的需求策劃專屬的私人居所。', cta: '聯繫禮賓官' }
      },
      details: {
        apply: '申請居所預約',
        apply_desc: '第三至第四季名額有限。成員每次停留最多可預約 14 天。',
        request_btn: '提交申請',
        credits_required: '所需積分',
        architecture: '建築風格',
        vibe: '空間氛圍',
        capacity: '入住人數',
        manifesto_title: '建築敘事',
        back: '返回選品系列',
        form: {
          name: '真實姓名',
          email: '安全電子信箱',
          dates: '偏好日期',
          note: '特殊需求 / 備註',
          success: '您的申請已傳送至禮賓處。'
        }
      },
      lounge: {
        welcome: '歡迎回來,', founding: '創始成員',
        desc: '在這裡，世界隨您的步調而動。您的下一個避世之所正靜候您的到來。',
        benefit: '當前專屬福利',
        benefit_desc: '作為創始成員，您擁有對第四季度開業的「天際山脊（Celestial Ridge）」的優先訪問權。可透過您的禮賓官安排私人參觀。',
        expires: '剩餘 {{days}} 天過期',
        discovery: '近期集體發現',
        concierge: '預約禮賓',
        exit: '離開酒廊',
        stats: { credits: '積分', residencies: '居所' }
      },
      login: {
        title: '登錄',
        subtitle: '成員身份驗證',
        google: '透過 Google 帳號進場',
        restricted: '訪問權限僅限經驗證的成員。',
        request: '申請加入邀請',
        error: '成員進場被拒。請檢查您的憑據。'
      }
    }
  },
  'zh-CN': {
    translation: {
      nav: { experiences: '精选行程', club: '俱乐部简介', lounge: '成员酒廊', entry: '进场登录' },
      hero: { est: '创立于 2024 • 邀请制', title1: '宝岛', title2: '穿山甲俱乐部', desc: '为建筑奇迹与深度体验爱好者打造的私人空间。在盐、石与深夜爵士乐的残响中寻求共鸣。', cta: '预约咨询', manifesto: '品牌宣言', scroll: '向下探索' },
      features: {
        sanctuary: { title: '稀有避世所', desc: '造访从不在公开平台上架的私人别墅。真实感是我们最极致的奢华。' },
        rhythm: { title: '策划律动', desc: '每一段旅程都如同爵士即兴般的节奏。放松、惊喜，且完美共振。' },
        kinship: { title: '精英群体', desc: '与志同道合的各界领袖建立连接。共同的价值观是每段对话的基石。' }
      },
      philosophy: {
        title1: '优雅的', title2: '耐心',
        desc: '如同穿山甲，我们重视深度而非速度。我们的俱乐部不为匆忙而生，而是为了那些懂得极致体验需要时间、意图与内心宁静的人。',
        cta: '探索品牌哲学',
        retention: '成员留存率'
      },
      itineraries: { 
        seasonal: '季节限定精选', title: '私密避世所', desc: '因其建筑意义与无比亲密感而策划的专属居所。', credits: '旅行积分', details: '详情',
        request: { title: '特殊地点申请', desc: '在标准系列中找不到心仪目的地？我们的礼宾官能为您的需求策划专属的私人居所。', cta: '联系礼宾官' }
      },
      lounge: {
        welcome: '欢迎回来,', founding: '创始成员',
        desc: '在这里，世界随您的步调而动。您的下一个避世之所正静候您的到来。',
        benefit: '当前专属福利',
        benefit_desc: '作为创始成员，您拥有对第四季度开业的“天际山脊（Celestial Ridge）”的优先访问权。可通过您的礼宾官安排私人参观。',
        expires: '剩余 {{days}} 天过期',
        discovery: '近期集体发现',
        concierge: '预约礼宾',
        exit: '离开酒廊',
        stats: { credits: '积分', residencies: '居所' }
      },
      login: {
        title: '登录',
        subtitle: '成员身份验证',
        google: '通过 Google 账号进场',
        restricted: '访问权限仅限经验证的成员。',
        request: '申请加入邀请',
        error: '成员进场被拒。请检查您的凭据。'
      }
    }
  },
  'ja': {
    translation: {
      nav: { experiences: 'エクスペリエンス', club: 'クラブ', lounge: 'ラウンジ', entry: 'エントリー' },
      hero: { est: '2024年創設 • 完全招待制', title1: 'フォルモサ', title2: 'センザンコウ', desc: '建築の希少性を愛する人々のためのプライベートコレクティブ。', cta: '問い合わせる', manifesto: 'マニフェスト', scroll: 'スクロール' },
      features: {
        sanctuary: { title: '稀有な隠れ家', desc: '一般には公開されないプライベートヴィラへのアクセス。' },
        rhythm: { title: '洗練されたリズム', desc: 'ジャズの即興のように、リラックスした予期せぬ旅を。' },
        kinship: { title: 'エリートの絆', desc: '共通の価値観を持つ人々との対話の場。' }
      },
      philosophy: {
        title1: '忍耐の', title2: '美学',
        desc: '深みを大切にします。最高の体験には時間と意図が必要です。',
        cta: '哲学を知る',
        retention: 'メンバー継続率'
      },
      itineraries: { 
        seasonal: 'コレクション', title: 'サンクチュアリ', desc: '建築的意義のために選ばれた邸宅。', credits: 'クレジット', details: '詳細',
        request: { title: '場所をリクエスト', desc: 'コンシェルジュがご要望に合わせて邸宅を厳選します。', cta: 'コンシェルジュに相談' }
      },
      lounge: {
        welcome: 'おかえりなさい', founding: '創設メンバー',
        desc: 'ここではあなたのペースで世界が動きます。',
        benefit: '現在の限定特典',
        benefit_desc: 'Celestial Ridgeへの先行アクセスが可能です。',
        expires: '残り {{days}} 日',
        discovery: '最近の発見',
        concierge: 'コンシェルジュ',
        exit: 'ラウンジを出る',
        stats: { credits: 'ポイント', residencies: '邸宅' }
      }
    }
  },
  'ko': {
    translation: {
      nav: { experiences: '체험', club: '클럽', lounge: '라운지', entry: '입장' },
      hero: { est: '2024년 창립 • 초대 전용', title1: '포모산', title2: '천산갑 클럽', desc: '건축적 희귀성을 감상하는 사람들을 위한 프라이빗 컬렉티브.', cta: '문의하기', manifesto: '매니페스토', scroll: '스크롤' },
      features: {
        sanctuary: { title: '희귀한 안식처', desc: '개인 비공개 빌라에 대한 독점적인 접근을 제공합니다.' },
        rhythm: { title: '큐레이팅된 리듬', desc: '재즈 즉흥 연주와 같은 완벽한 리듬의 여행.' },
        kinship: { title: '엘리트 유대감', desc: '가치관을 공유하는 특별한 사람들과의 연결.' }
      },
      philosophy: {
        title1: '인내의', title2: '우아함',
        desc: '최고의 경험은 시간과 의도, 그리고 평온함이 필요합니다.',
        cta: '철학 탐구',
        retention: '회원 유지율'
      },
      itineraries: { 
        seasonal: '시즌 컬렉션', title: '프라이빗 샌츄어리', desc: '건축적 의미를 바탕으로 선별된 특별한 거주지.', credits: '여행 크레딧', details: '상세보기',
        request: { title: '장소 요청', desc: '컨시어지가 당신만을 위한 특별한 장소를 제안합니다.', cta: '컨시어지 문의' }
      },
      lounge: {
        welcome: '다시 오신 것을 환영합니다', founding: '창립 회원',
        desc: '이곳에서는 세상이 당신의 속도에 맞춰 움직입니다.',
        benefit: '현재 독점 혜택',
        benefit_desc: 'Celestial Ridge에 대한 조기 액세스 권한이 부여됩니다.',
        expires: '{{days}}일 후 만료',
        discovery: '최근의 발견',
        concierge: '컨시어지 요청',
        exit: '라운지 나가기',
        stats: { credits: '크레딧', residencies: '거주지' }
      }
    }
  },
  'fr': {
    translation: {
      nav: { experiences: 'EXPÉRIENCES', club: 'LE CLUB', lounge: 'SALON', entry: 'ACCÈS' },
      hero: { est: 'EST. 2024 • SUR INVITATION', title1: 'Club', title2: 'Pangolin', desc: 'Un collectif privé pour les connaisseurs de raretés architecturales.', cta: 'Inquire Availability', manifesto: 'Le Manifeste', scroll: 'Découvrir' },
      features: {
        sanctuary: { title: 'Sanctuaire Rare', desc: 'Accès à des villas privées jamais listées publiquement.' },
        rhythm: { title: 'Rythme Curaté', desc: 'Chaque voyage est rythmé comme une improvisation de jazz.' },
        kinship: { title: 'Parenté d\'Élite', desc: 'Connectez-وز مع أفراد يشاركونك نفس القيم.' }
      },
      philosophy: {
        title1: 'L\'Élégance de la', title2: 'Patience',
        desc: 'Les expériences les plus raffinées demandent du temps et de l\'intention.',
        cta: 'DÉCOUVRIR NOTRE PHILOSOPHIE',
        retention: 'Rétention des membres'
      },
      itineraries: { 
        seasonal: 'Collections', title: 'Sanctuaires', desc: 'Résidences exclusives sélectionnées pour leur importance architecturale.', credits: 'Crédits Voyage', details: 'Détails',
        request: { title: 'Demander un lieu', desc: 'Notre concierge peut curater une résidence privée pour vous.', cta: 'CONTACTER LE CONCIERGE' }
      },
      lounge: {
        welcome: 'Bienvenue,', founding: 'Membre Fondateur',
        desc: 'Ici, le monde avance à votre rythme.',
        benefit: 'Avantage exclusif actuel',
        benefit_desc: 'Accès anticipé à l\'ouverture de "Celestial Ridge".',
        expires: 'EXPIRE DANS {{days}} JOURS',
        discovery: 'Découverte Récente',
        concierge: 'Concierge',
        exit: 'Quitter le Salon',
        stats: { credits: 'Crédits', residencies: 'Résidences' }
      }
    }
  },
  'de': {
    translation: {
      nav: { experiences: 'ERLEBNISSE', club: 'DER CLUB', lounge: 'LOUNGE', entry: 'ZUGANG' },
      hero: { est: 'GEGR. 2024 • NUR AUF EINLADUNG', title1: 'Formosan', title2: 'Pangolin Club', desc: 'Ein privates Kollektiv für Kenner architektonischer Seltenheiten.', cta: 'Verfügbarkeit prüfen', manifesto: 'Das Manifest', scroll: 'Entdecken' },
      features: {
        sanctuary: { title: 'Seltene Zuflucht', desc: 'Zugang zu privaten Villen, die nie öffentlich gelistet werden.' },
        rhythm: { title: 'Kuratierter Rhythmus', desc: 'Jede Reise ist getaktet wie eine Jazz-Improvisation.' },
        kinship: { title: 'Elite-Zugehörigkeit', desc: 'Verbinden Sie sich mit Gleichgesinnten.' }
      },
      philosophy: {
        title1: 'Die Eleganz der', title2: 'Geduld',
        desc: 'Feinste Erfahrungen erfordern Zeit, Intention und Stille.',
        cta: 'UNSERE PHILOSOPHIE ENTDECKEN',
        retention: 'Mitgliederbindung'
      },
      itineraries: { 
        seasonal: 'Kollektionen', title: 'Heiligtümer', desc: 'Exklusive Residenzen von architektonischer Bedeutung.', credits: 'Reiseguthaben', details: 'Details',
        request: { title: 'Ort anfragen', desc: 'Unser Concierge kann eine Residenz für Sie kuratieren.', cta: 'CONCIERGE KONTAKTIEREN' }
      },
      lounge: {
        welcome: 'Willkommen zurück,', founding: 'Gründungsmitglied',
        desc: 'Die Welt bewegt sich hier in Ihrem Tempo.',
        benefit: 'Exklusiver Vorteil',
        benefit_desc: 'Früher Zugang zur Eröffnung von "Celestial Ridge".',
        expires: 'LÄUFT IN {{days}} TAGEN AB',
        discovery: 'Aktuelle Entdeckung',
        concierge: 'Concierge anfragen',
        exit: 'Lounge verlassen',
        stats: { credits: 'Guthaben', residencies: 'Residenzen' }
      }
    }
  },
  'es': {
    translation: {
      nav: { experiences: 'EXPERIENCIAS', club: 'EL CLUB', lounge: 'SALÓN', entry: 'ENTRADA' },
      hero: { est: 'EST. 2024 • SOLO INVITACIÓN', title1: 'Formosan', title2: 'Pangolin Club', desc: 'Un colectivo privado para conocedores de la rareza arquitectónica.', cta: 'Consultar disponibilidad', manifesto: 'El Manifiesto', scroll: 'Descubrir' },
      features: {
        sanctuary: { title: 'Santuario Raro', desc: 'Acceso a villas privadas que nunca aparecen en plataformas públicas.' },
        rhythm: { title: 'Ritmo Curado', desc: 'Cada viaje tiene el ritmo de una improvisación de jazz.' },
        kinship: { title: 'Afinidad de Élite', desc: 'Conéctese con individuos de estatura compartida.' }
      },
      philosophy: {
        title1: 'La Elegancia de la', title2: 'Paciencia',
        desc: 'Las mejores experiencias requieren tiempo e intención.',
        cta: 'DESCUBRE NUESTRA FILOSOFÍA',
        retention: 'Retención de Miembros'
      },
      itineraries: { 
        seasonal: 'Colecciones', title: 'Santuarios', desc: 'Residencias exclusivas seleccionadas por su importancia arquitectónica.', credits: 'Créditos', details: 'Detalles',
        request: { title: 'Solicitar un lugar', desc: 'Nuestro conserje puede curar una residencia para usted.', cta: 'CONTACTAR CONSERJE' }
      },
      lounge: {
        welcome: 'Bienvenido de nuevo,', founding: 'Miembro Fundador',
        desc: 'El mundo se mueve a su ritmo aquí.',
        benefit: 'Beneficio Exclusivo',
        benefit_desc: 'Acceso anticipado a la apertura de "Celestial Ridge".',
        expires: 'EXPIRA EN {{days}} DÍAS',
        discovery: 'Descubrimientos Recientes',
        concierge: 'Solicitar Conserje',
        exit: 'Salir del Salón',
        stats: { credits: 'Créditos', residencies: 'Residencias' }
      }
    }
  },
  'it': {
    translation: {
      nav: { experiences: 'ESPERIENZE', club: 'IL CLUB', lounge: 'SALONE', entry: 'ACCESSO' },
      hero: { est: 'EST. 2024 • SOLO SU INVITO', title1: 'Formosan', title2: 'Pangolin Club', desc: 'Un collettivo privato per intenditori di rarità architettoniche.', cta: 'Richiedi disponibilità', manifesto: 'Il Manifesto', scroll: 'Scopri' },
      features: {
        sanctuary: { title: 'Santuario Raro', desc: 'Accesso a ville private mai elencate su piattaforme pubbliche.' },
        rhythm: { title: 'Ritmo Curato', desc: 'Ogni viaggio è ritmato come un\'improvvisazione jazz.' },
        kinship: { title: 'Affinità d\'Élite', desc: 'Connettiti con individui di pari statura.' }
      },
      philosophy: {
        title1: 'L\'Eleganza della', title2: 'Pazienza',
        desc: 'Le esperienze più belle richiedono tempo e intenzione.',
        cta: 'SCOPRI LA NOSTRA FILOSOFIA',
        retention: 'Mantenimento Membri'
      },
      itineraries: { 
        seasonal: 'Collezioni', title: 'Santuari', desc: 'Residenze esclusive selezionate per l\'importanza architettonica.', credits: 'Crediti', details: 'Dettagli',
        request: { title: 'Richiedi una località', desc: 'Il nostro concierge può curare una residenza per te.', cta: 'CONTATTA IL CONCIERGE' }
      },
      lounge: {
        welcome: 'Bentornato,', founding: 'Membro Fondatore',
        desc: 'Qui il mondo si muove al tuo ritmo.',
        benefit: 'Vantaggio Esclusivo',
        benefit_desc: 'Accesso anticipado all\'apertura di "Celestial Ridge".',
        expires: 'SCADE TRA {{days}} GIORNI',
        discovery: 'Ultime Scoperte',
        concierge: 'Richiedi Concierge',
        exit: 'Esci dal Salone',
        stats: { credits: 'Crediti', residencies: 'Residencies' }
      }
    }
  },
  'ar': {
    translation: {
      nav: { experiences: 'تجارب', club: 'النادي', lounge: 'الردهة', entry: 'دخول' },
      hero: { est: 'تأسس ٢٠٢٤ • بالدعوة فقط', title1: 'نادي', title2: 'بانجولين', desc: 'تجمع خاص لخبراء النوادر المعمارية.', cta: 'الاستفسار عن التوفر', manifesto: 'البيان', scroll: 'اكتشف' },
      features: {
        sanctuary: { title: 'ملاذ نادر', desc: 'الوصول إلى الفيلات الخاصة التي لا تدرج أبداً.' },
        rhythm: { title: 'إيقاع منسق', desc: 'كل رحلة تسير مثل ارتجال الجاز.' },
        kinship: { title: 'قرابة النخبة', desc: 'تواصل مع أفراد من نفس المكانة.' }
      },
      philosophy: {
        title1: 'أناقة', title2: 'الصبر',
        desc: 'يتطلب الحصول على أفضل التجارب وقتاً ونية.',
        cta: 'اكتشف فلسفتنا',
        retention: 'الاحتفاظ بالأعضاء'
      },
      itineraries: { 
        seasonal: 'مجموعات', title: 'ملاذات خاصة', desc: 'مساكن حصرية تم اختيارها لأهميتها المعمارية.', credits: 'اعتمادات السفر', details: 'تفاصيل',
        request: { title: 'طلب موقع', desc: 'يمكن لخدمة الكونسيرج الخاصة بنا تنسيق سكن خاص لك.', cta: 'اتصل بالكونسيرج' }
      },
      lounge: {
        welcome: 'مرحباً بعودتك،', founding: 'عضو مؤسس',
        desc: 'العالم يتحرك وفقاً لسرعتك هنا.',
        benefit: 'ميزة حصرية حالية',
        benefit_desc: 'لديك وصول مبكر إلى "Celestial Ridge".',
        expires: 'تنتهي الصلاحية خلال {{days}} يوماً',
        discovery: 'اكتشاف جماعي حديث',
        concierge: 'طلب كونسيرج',
        exit: 'مغادرة الردهة',
        stats: { credits: 'اعتمادات', residencies: 'مساكن' }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
