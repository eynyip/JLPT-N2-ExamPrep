// ============================================================
//  N2 GRAMMAR DATA
//  To add a new unit: copy a block below, increment the id,
//  set unit:'Unit X-X', and fill in all fields.
//  Last id used: 40
// ============================================================

const GRAMMAR = [

  // ════════════════════════════════════════════
  //  UNIT 1-1  (2026/3/21)
  //  Patterns: からすると, くせに, げ, といえば, にしては
  // ════════════════════════════════════════════

  { id:1, unit:'Unit 1-1', pattern:'〜からすると', english:'Judging from / From the standpoint of',
    meaning:'Used to express a judgment based on evidence, or to state an opinion from a certain standpoint. Expresses a subjective judgment.',
    structure:'[名詞] ＋ からすると',
    examples:[
      { jp:'あの話し方からすると、彼は東京の人ではないようだ。', en:'Judging from his way of speaking, he doesn\'t seem to be from Tokyo.' },
      { jp:'親の立場からすると、子供の安全が一番の心配だ。', en:'From the parents\' standpoint, the child\'s safety is the biggest concern.' }
    ],
    note:'More inference-focused than 〜から見ると. Often used for subjective judgments.',
    compareTo:'〜から見ると (similar, but 〜からすると has a stronger inference/judgment nuance)'
  },
  { id:2, unit:'Unit 1-1', pattern:'〜くせに', english:'Despite / Although (negative tone)',
    meaning:'Used to express blame, criticism, or contempt. Has a stronger negative connotation than のに.',
    structure:'[動詞・い形・な形・名詞(の)] の普通形 ＋ くせに',
    examples:[
      { jp:'彼は自分では何もしないくせに、文句ばかり言う。', en:'Despite the fact that he never does anything, he always complains.' },
      { jp:'本当は好きなくせに、興味がないふりをしている。', en:'Despite actually liking it, they are pretending to be uninterested.' }
    ],
    note:'⚠️ Not normally used for oneself (though may be used for self-deprecation). Carries a critical or blaming tone.',
    compareTo:'〜のに (surprise/dissatisfaction), but 〜くせに adds contempt or blame toward the subject'
  },
  { id:3, unit:'Unit 1-1', pattern:'〜げ', english:'Looks / Seems (from appearance)',
    meaning:'A suffix indicating someone looks or seems to be in a certain state, based on their appearance or expression.',
    structure:'[い形(語幹)・な形(語幹)] ＋ げ',
    examples:[
      { jp:'彼は何か辛げな表情をしていた。', en:'He had a look on his face that seemed painful.' },
      { jp:'多くの人が不安げに消火活動を見守っていた。', en:'Many people were watching the firefighting efforts anxiously.' }
    ],
    note:'⚠️ Not used for one\'s own emotions. Slightly more formal than 〜そうだ. Often attached to emotion words (悲し、不安 etc.).',
    compareTo:'〜そうだ (similar, but 〜げ is more formal/literary)'
  },
  { id:4, unit:'Unit 1-1', pattern:'〜といえば', english:'Speaking of / If you say',
    meaning:'Used to bring up a related topic, or when something mentioned reminds you of something else.',
    structure:'[名詞・普通形] ＋ といえば',
    examples:[
      { jp:'日本料理といえば、やはり寿司が一番有名だろう。', en:'Speaking of Japanese food, sushi is probably the most famous.' },
      { jp:'このアパートは不便だといえば不便だが、家賃が安いのが魅力だ。', en:'If you say this apartment is inconvenient, it is, but the low rent is its appeal.' }
    ],
    note:'Useful for adding new but related information to a conversation. Works like a chain-of-association topic shift.',
    compareTo:'〜と言うと ≒ same; but 〜といえば is better for chaining associated topics'
  },
  { id:5, unit:'Unit 1-1', pattern:'〜にしては', english:'For / Considering',
    meaning:'Used when actual results differ from what would normally be expected given a certain standard.',
    structure:'[名詞・動詞普通形] ＋ にしては',
    examples:[
      { jp:'初めて作った料理にしては、とてもおいしくできた。', en:'Considering it\'s the first time I\'ve cooked this, it turned out very tasty.' },
      { jp:'彼は日本に10年も住んでいるにしては、日本語があまり上手ではない。', en:'For someone who has lived in Japan for 10 years, his Japanese isn\'t very good.' }
    ],
    note:'Often followed by a concrete number or name. The result is usually unexpected — better or worse than expected.',
    compareTo:'〜わりに (similar meaning, but にしては focuses more on a specific benchmark)'
  },

  // ════════════════════════════════════════════
  //  UNIT 1-1 continued
  //  Patterns: にもかかわらず, もしない, をめぐって
  // ════════════════════════════════════════════

  { id:6, unit:'Unit 1-1', pattern:'〜にもかかわらず', english:'Despite / In spite of',
    meaning:'Formal expression for "despite" or "regardless of." The outcome is opposite to what the situation would suggest.',
    structure:'[普通形(な形/名詞:だ)] ＋ にもかかわらず',
    examples:[
      { jp:'悪天候にもかかわらず、多くの観客が集まった。', en:'Despite the bad weather, a large audience gathered.' },
      { jp:'あまり勉強しなかったにもかかわらず、テストの成績はよかった。', en:'Despite not having studied much, I did well in the test.' }
    ],
    note:'More formal than 〜のに. Indicates a result clearly opposite to what was expected.',
    compareTo:'〜のに (same meaning, but にもかかわらず is more formal/written)'
  },
  { id:7, unit:'Unit 1-1', pattern:'〜もしない', english:'Not even / Without even',
    meaning:'Emphasizes that someone does not do something at all. Often carries a tone of surprise or criticism.',
    structure:'[動詞ます形(〜ます)] ＋ もしない',
    examples:[
      { jp:'彼は私の顔を見もしないで、部屋を出て行った。', en:'He left the room without even looking at my face.' },
      { jp:'自分で調べもしないで、すぐに人に聞くのは良くない。', en:'It\'s not good to ask others without even trying to look it up yourself.' }
    ],
    note:'Emphasis pattern. Heightens the sense of complete negation or surprising omission.',
    compareTo:'〜もせずに (similar; もしない is slightly stronger in emphasis)'
  },
  { id:8, unit:'Unit 1-1', pattern:'〜をめぐって', english:'Concerning / Surrounding (a dispute)',
    meaning:'Used when multiple people or groups are arguing, competing, or actively discussing a specific issue.',
    structure:'[名詞] ＋ をめぐって',
    examples:[
      { jp:'新しい空港の建設をめぐって、住民たちの意見が分かれている。', en:'Opinions among residents are divided concerning the construction of the new airport.' },
      { jp:'親の遺産をめぐって、兄弟で裁判になった。', en:'The siblings went to court over their parents\' inheritance.' }
    ],
    note:'Implies active conflict or debate, not just a topic of discussion.',
    compareTo:'〜について (neutral discussion); をめぐって implies conflict/tension'
  },

  // ════════════════════════════════════════════
  //  UNIT 1-2  (2026/4/11)
  //  Patterns: 一方で, かいがあって, っこない,
  //            というものは, どころではない, はさておき,
  //            はもとより, を抜きに
  // ════════════════════════════════════════════

  { id:9, unit:'Unit 1-2', pattern:'〜一方(で)', english:'On the one hand / While / At the same time',
    meaning:'Describes two contrasting aspects of a situation, or two things happening simultaneously.',
    structure:'[普通形] ＋ 一方(で)',
    examples:[
      { jp:'この仕事は給料がいい一方で、自由な時間がほとんどない。', en:'While this job pays well, on the other hand there is almost no free time.' },
      { jp:'子供が減る一方で、高齢者の数は増え続けている。', en:'While the number of children is decreasing, the number of elderly keeps increasing.' }
    ],
    note:'Can also mean "keeps getting more/less" when used alone (減る一方 = keeps decreasing).',
    compareTo:'〜反面 (similar contrast, but 反面 implies the two sides are contradictory qualities of the same thing)'
  },
  { id:10, unit:'Unit 1-2', pattern:'〜かいがあって', english:'It was worth... / Thanks to... (positive result)',
    meaning:'Expresses that an effort or action has led to the expected positive result.',
    structure:'[動詞た形・名詞(の)] ＋ かいがあって',
    examples:[
      { jp:'毎日練習したかいがあって、試合に勝つことができた。', en:'It was worth practicing every day because we were able to win the match.' },
      { jp:'手術のかいがあって、祖父の病気はすっかり良くなった。', en:'Thanks to the surgery, my grandfather\'s illness has completely recovered.' }
    ],
    note:'⚠️ Only used for positive/good results. Cannot be used when the outcome is bad.',
    compareTo:'〜おかげで (similar positive result, but かいがあって emphasizes the effort was justified)'
  },
  { id:11, unit:'Unit 1-2', pattern:'〜っこない', english:'No way / Definitely not (colloquial)',
    meaning:'A strong, colloquial negation meaning "there\'s no way" or "it\'s impossible."',
    structure:'[動詞ます形(〜ます)] ＋ っこない',
    examples:[
      { jp:'こんなに難しい本、一日で読み終えられっこない。', en:'There\'s no way I can finish reading such a difficult book in one day.' },
      { jp:'彼に言ったって、信じてくれっこないよ。', en:'Even if you tell him, there\'s no way he\'ll believe you.' }
    ],
    note:'⚠️ Casual expression. Avoid using with superiors (目上の人). Implies 100% impossibility.',
    compareTo:'〜わけがない (same meaning, but more neutral register); っこない is more colloquial/emphatic'
  },
  { id:12, unit:'Unit 1-2', pattern:'〜というものは', english:'Something like... / ...is a thing that...',
    meaning:'Used when defining the essence or general nature of something. Makes a philosophical or general statement.',
    structure:'[名詞] ＋ というものは',
    examples:[
      { jp:'人生というものは、思い通りにいかないことが多い。', en:'Life is something that often doesn\'t go as planned.' },
      { jp:'言葉というものは、時代とともに変化していくものだ。', en:'Language is a thing that changes with the times.' }
    ],
    note:'Often followed by ものだ or ものではない at the end. Used to make general truths or philosophical observations.',
    compareTo:'〜というものだ (similar; というものは sets up the topic, then describes its nature)'
  },
  { id:13, unit:'Unit 1-2', pattern:'〜どころではない', english:'Far from / Not the time for / Out of the question',
    meaning:'Indicates that a situation is so extreme/busy that doing something else is completely out of the question.',
    structure:'[名詞・動詞普通形] ＋ どころではない',
    examples:[
      { jp:'仕事が忙しくて、旅行に行くどころではない。', en:'I\'m so busy with work that traveling is out of the question.' },
      { jp:'風邪がひどくて、食事どころではない。', en:'My cold is so bad that I\'m in no state to even eat.' }
    ],
    note:'The situation described is extreme — far worse than normal.',
    compareTo:'〜わけではない (just denies something); どころではない implies the situation is severe'
  },
  { id:14, unit:'Unit 1-2', pattern:'〜はさておき', english:'Setting aside / Aside from',
    meaning:'Temporarily sets aside one topic to move on to a more important or immediate one.',
    structure:'[名詞] ＋ はさておき',
    examples:[
      { jp:'冗談はさておき、本題に入りましょう。', en:'Jokes aside, let\'s get to the main point.' },
      { jp:'費用はさておき、まずはどこに行きたいか決めましょう。', en:'Setting aside the cost, let\'s first decide where we want to go.' }
    ],
    note:'Acknowledges the topic, then redirects. The set-aside topic is not ignored — just prioritized later.',
    compareTo:'〜はともかく (similar; はさておき implies "put it aside for now"; はともかく implies "even if we ignore it")'
  },
  { id:15, unit:'Unit 1-2', pattern:'〜はもとより', english:'Needless to say / Not only... but also (formal)',
    meaning:'Formal way of saying "not only A, but also B." A is taken for granted; B adds further emphasis.',
    structure:'[名詞] ＋ はもとより',
    examples:[
      { jp:'彼は英語はもとより、フランス語も中国語も話せる。', en:'Needless to say English, he can also speak French and Chinese.' },
      { jp:'この病気は本人はもとより、家族にとってもつらいものだ。', en:'This illness is painful not only for the person themselves but also for their family.' }
    ],
    note:'More formal than はもちろん. A (the first item) is assumed/obvious; B is the added point.',
    compareTo:'〜はもちろん (same meaning, slightly less formal)'
  },
  { id:16, unit:'Unit 1-2', pattern:'〜を抜きに(して)', english:'Without / Leaving out / Excluding',
    meaning:'Doing something without including a necessary or important element.',
    structure:'[名詞] ＋ を抜きに(して)',
    examples:[
      { jp:'お世辞を抜きにして、あなたの絵は素晴らしい。', en:'Flattery aside, your painting is wonderful.' },
      { jp:'田中さんを抜きに、このプロジェクトは進められない。', en:'We cannot proceed with this project without Mr. Tanaka.' }
    ],
    note:'Implies that the excluded element is normally necessary or expected.',
    compareTo:'〜なしに (similar; を抜きに has a nuance of "consciously removing" something important)'
  },

  // ════════════════════════════════════════════
  //  UNIT 2-1  (2026/4/11 continued)
  //  Patterns: やら〜やら, か〜ないかのうちに, ばかりか,
  //            ずにはいられない, 以上は, 折に, からして, 次第
  // ════════════════════════════════════════════

  { id:17, unit:'Unit 2-1', pattern:'〜やら〜やら', english:'...and... / Such things as... (overwhelmed listing)',
    meaning:'Used to list examples that are causing confusion, busyness, or difficulty. Implies there are even more things.',
    structure:'[名詞 / 動詞辞書形 / い形容詞] ＋ やら',
    examples:[
      { jp:'宿題やら仕事やらで、今週は寝る暇もない。', en:'With homework, work, and other things, I have no time to sleep this week.' },
      { jp:'財布を落とすやら雨に降られるやら、散々な一日だった。', en:'What with losing my wallet and getting rained on, it was a terrible day.' }
    ],
    note:'Conveys the speaker\'s confusion or overwhelm. Used in negative/stressful contexts.',
    compareTo:'〜や〜など (neutral listing); やら〜やら adds a nuance of chaos or stress'
  },
  { id:18, unit:'Unit 2-1', pattern:'〜か〜ないかのうちに', english:'No sooner than / Just as',
    meaning:'Used when the next action occurs almost simultaneously with the end of the first.',
    structure:'[動詞辞書形/た形] ＋ か ＋ [動詞ない形] ＋ かのうちに',
    examples:[
      { jp:'授業が終わるか終わらないかのうちに、彼は教室を飛び出した。', en:'No sooner had the class ended than he rushed out of the classroom.' },
      { jp:'布団に入るか入らないかのうちに、眠ってしまった。', en:'I fell asleep almost as soon as I got into bed.' }
    ],
    note:'⚠️ Cannot be followed by volitional/request sentences. Emphasizes the simultaneous/instantaneous nature.',
    compareTo:'〜たとたん (sudden change after something); 〜かのうちに emphasizes "barely had time to finish"'
  },
  { id:19, unit:'Unit 2-1', pattern:'〜ばかりか', english:'Not only... but also',
    meaning:'Adds something even more significant to what is already stated.',
    structure:'[普通形(な形-な/である・名詞-である)] ＋ ばかりか',
    examples:[
      { jp:'彼は英語ばかりか、中国語もペラペラだ。', en:'He is fluent not only in English but also in Chinese.' },
      { jp:'この薬は効かないばかりか、副作用が出ることもある。', en:'This medicine is not only ineffective but can also cause side effects.' }
    ],
    note:'Both clauses must have the same polarity (both positive or both negative).',
    compareTo:'〜だけでなく (similar, but ばかりか is more formal and the B part is more surprising/emphatic)'
  },
  { id:20, unit:'Unit 2-1', pattern:'〜ずにはいられない', english:'Cannot help but... / Can\'t resist...',
    meaning:'Used when the speaker cannot suppress a feeling or desire — they naturally do it involuntarily.',
    structure:'[動詞ない形(〜ない)] ＋ ずにはいられない (する→せずには)',
    examples:[
      { jp:'隣の人の話が面白くて、笑わずにはいられない。', en:'I can\'t help but laugh because what the person next to me is saying is so funny.' },
      { jp:'あの映画を見たら、だれもが感動せずにはいられないだろう。', en:'Anyone who sees that movie will not be able to help being moved.' }
    ],
    note:'Subject is basically the speaker. For others, add 〜ようだ or 〜らしい. Slightly more formal/literary.',
    compareTo:'〜ないではいられない (same meaning, slightly more spoken)'
  },
  { id:21, unit:'Unit 2-1', pattern:'〜以上(は)', english:'Since / Now that / Given that',
    meaning:'Expresses a strong determination, judgment, or obligation based on a certain situation.',
    structure:'[普通形(な形-である/名詞-である)] ＋ 以上(は)',
    examples:[
      { jp:'日本で働く以上、敬語を覚えなければならない。', en:'Since you work in Japan, you must learn honorifics.' },
      { jp:'引き受けた以上、最後まで責任を持ってやり遂げるつもりだ。', en:'Now that I\'ve accepted the task, I intend to carry it out responsibly to the end.' }
    ],
    note:'Often followed by べきだ, なければならない, つもりだ — strong will or obligation.',
    compareTo:'〜からには (similar; 以上 is based more on objective situations, からには is slightly more personal)'
  },
  { id:22, unit:'Unit 2-1', pattern:'〜折に(は)', english:'When / On the occasion of (formal)',
    meaning:'Formal way to say "when" or "on the occasion of." Often carries a nuance of a good/convenient opportunity.',
    structure:'[名詞の / 動詞連体形] ＋ 折に',
    examples:[
      { jp:'次に来日された折に、ぜひ弊社にお立ち寄りください。', en:'The next time you come to Japan, please feel free to stop by our office.' },
      { jp:'先日お会いした折に、お話しした件についてご報告します。', en:'I would like to report on the matter we discussed when we met the other day.' }
    ],
    note:'Used in formal letters and business communication. Not for trivial daily habits.',
    compareTo:'〜際に (similar, formal); 折に sometimes implies a lucky/good timing'
  },
  { id:23, unit:'Unit 2-1', pattern:'〜からして', english:'Judging from / Even... (inference from one aspect)',
    meaning:'Judges the whole from one part. "Even just looking at X, you can tell Y." Often used for negative assessments.',
    structure:'[名詞] ＋ からして',
    examples:[
      { jp:'あの店は看板の文字からして、入る気が起きない。', en:'Judging from even the lettering on the sign, I don\'t feel like going into that restaurant.' },
      { jp:'彼の態度は、挨拶の仕方からして失礼だ。', en:'His attitude is rude, starting with the way he greets people.' }
    ],
    note:'Often used for negative evaluations. "Even at the most basic level, it\'s bad."',
    compareTo:'〜からすると (similar but からして implies "starting from this one thing, everything is wrong")'
  },
  { id:24, unit:'Unit 2-1', pattern:'〜次第(しだい)', english:'As soon as / Immediately after',
    meaning:'Expresses that an action will be taken immediately after something is completed.',
    structure:'[動詞ます形(〜ます)] ＋ 次第',
    examples:[
      { jp:'資料ができ次第、メールでお送りいたします。', en:'As soon as the materials are ready, I will send them via email.' },
      { jp:'準備が整い次第、会議を始めましょう。', en:'Let\'s start the meeting as soon as the preparations are complete.' }
    ],
    note:'Cannot be used for past events. Forward-looking only. More formal than 〜たらすぐ.',
    compareTo:'〜たらすぐ (similar, but more casual); 次第 is more formal and implies immediacy'
  },

  // ════════════════════════════════════════════
  //  UNIT 2-2  (2026/4/11 continued)
  //  Patterns: 限り, たいものだ, ないものか,
  //            はともかく, だけまし, きり,
  //            に先立って, っぽい
  // ════════════════════════════════════════════

  { id:25, unit:'Unit 2-2', pattern:'〜限り', english:'As long as / As far as',
    meaning:'Expresses a condition that must continue, or the limits of one\'s knowledge/scope.',
    structure:'[普通形(な形-な/名詞-である)] ＋ 限り',
    examples:[
      { jp:'体が丈夫な限り、現役で働き続けたい。', en:'I want to keep working as long as my body is healthy.' },
      { jp:'私が調べた限りでは、このデータに間違いはありません。', en:'As far as I\'ve researched, there are no mistakes in this data.' }
    ],
    note:'The following sentence often contains words expressing conditions, will, or judgment.',
    compareTo:'〜うちに (time limit before change); 限り focuses on a continuing condition'
  },
  { id:26, unit:'Unit 2-2', pattern:'〜たいものだ', english:'Really want to / Truly wish (heartfelt desire)',
    meaning:'Expresses a strong, heartfelt desire or longing — often for something difficult to achieve.',
    structure:'[動詞ます形(〜ます)] ＋ たいものだ',
    examples:[
      { jp:'いつかあんな広い家に住みたいものだ。', en:'I truly wish to live in a spacious house like that someday.' },
      { jp:'自分の店を持つという夢を、いつか実現させたいものだ。', en:'I really want to realize my dream of having my own shop one day.' }
    ],
    note:'⚠️ Not used for direct requests. Expresses longing, not demands.',
    compareTo:'〜たい (simple desire); たいものだ is more emotive and often about long-term wishes'
  },
  { id:27, unit:'Unit 2-2', pattern:'〜ないものか', english:'Can\'t we...? / Is there no way to...?',
    meaning:'Expresses a strong desire for something difficult to happen. Wonders if there\'s any possibility.',
    structure:'[動詞ない形] ＋ ものか / ものだろうか',
    examples:[
      { jp:'この病気は、薬を使わずに治らないものか。', en:'Isn\'t there a way this illness could be cured without using medicine?' },
      { jp:'誰か私の代わりにこの宿題をやってくれないものか。', en:'I wonder if someone could do this homework for me.' }
    ],
    note:'Can also use できないものか (possibility form). Implies the speaker feels it\'s difficult but hopes.',
    compareTo:'〜たいものだ (pure longing); ないものか includes a nuance of looking for a solution/way'
  },
  { id:28, unit:'Unit 2-2', pattern:'〜はともかく', english:'Setting aside / Regardless of',
    meaning:'Acknowledges A may have issues, but shifts focus to the more important or relevant point B.',
    structure:'[名詞] ＋ (は)ともかく',
    examples:[
      { jp:'値段はともかく、この鞄は質がとても良い。', en:'Setting the price aside, the quality of this bag is very good.' },
      { jp:'勝てるかはともかく、最後まで全力を尽くすことが大切だ。', en:'Regardless of whether we can win, it\'s important to do our best until the end.' }
    ],
    note:'A is acknowledged but temporarily ignored. Unlike はさておき, implies "even if A is an issue, B is still true."',
    compareTo:'〜はさておき (put aside for now); はともかく (even if that\'s the case, B is still true)'
  },
  { id:29, unit:'Unit 2-2', pattern:'〜だけまし', english:'At least / Better than nothing',
    meaning:'Says that although the situation isn\'t ideal, it\'s better than the worst case.',
    structure:'[普通形(な形-な/名詞-だ)] ＋ だけまし',
    examples:[
      { jp:'給料は安くなったが、クビにならなかっただけまし。', en:'My salary decreased, but at least I wasn\'t fired.' },
      { jp:'渋滞で遅れたが、会議に間に合っただけまし。', en:'I was delayed by traffic, but at least I made it in time for the meeting.' }
    ],
    note:'A worse scenario is implied in the background. Used to find comfort in a bad situation.',
    compareTo:'〜ほうがいい (choosing between options); だけまし is about making peace with a bad outcome'
  },
  { id:30, unit:'Unit 2-2', pattern:'〜きり', english:'Since... and no change / Only (and nothing since)',
    meaning:'Describes a state that has continued unchanged since a specific action occurred.',
    structure:'[動詞た形] ＋ きり',
    examples:[
      { jp:'息子は朝「行ってきます」と言ったきり、まだ帰ってこない。', en:'My son left this morning saying "I\'m going," and hasn\'t returned since.' },
      { jp:'その本は一度読んだきり、ずっと本棚に置いたままだ。', en:'I read that book only once and it has been on the shelf ever since.' }
    ],
    note:'N2 focuses on 〜きり meaning "since then, no change." 名詞+きり also means "only."',
    compareTo:'〜まま (also means "left in a state"); きり emphasizes "since that one action, nothing more"'
  },
  { id:31, unit:'Unit 2-2', pattern:'〜に先立って', english:'Prior to / Before (formal preparation)',
    meaning:'Describes an action taken as preparation or in advance of a major event or official occasion.',
    structure:'[名詞] / [動詞辞書形(の)] ＋ に先立って',
    examples:[
      { jp:'映画の公開に先立って、主演俳優の舞台挨拶が行われた。', en:'Prior to the movie\'s release, a stage greeting by the lead actor was held.' },
      { jp:'工事の開始に先立って、近隣住民への説明会が開かれた。', en:'Before starting the construction, an explanatory meeting for local residents was held.' }
    ],
    note:'⚠️ Not used for trivial daily habits. Formal expression for significant events.',
    compareTo:'〜の前に (neutral, for any timing); に先立って is for significant/formal prior actions'
  },
  { id:32, unit:'Unit 2-2', pattern:'〜っぽい', english:'-ish / Looks like / Tends to',
    meaning:'Indicates something has a strong tendency or appearance of a certain quality. Often slightly negative.',
    structure:'[名詞] / [い形(語幹)] / [な形(語幹)] / [ます形] ＋ っぽい',
    examples:[
      { jp:'この靴、デザインはいいけど、少し安っぽく見えるね。', en:'The design of these shoes is nice, but they look a bit cheap.' },
      { jp:'彼は最近、忘れっぽくなっていて困っている。', en:'He\'s become forgetful lately, which is causing problems.' }
    ],
    note:'Mainly spoken/casual. Often implies a negative impression (安っぽい、子供っぽい).',
    compareTo:'〜らしい (positive "true to its nature"); っぽい often implies an unwanted impression'
  },

  // ════════════════════════════════════════════
  //  UNIT 3-1  (2026/5/16 + 2026/6/20)
  //  Patterns: がたい, 得ない, あまり, こととなると,
  //            つつある, ては〜ては, てこそ, というものだ
  // ════════════════════════════════════════════

  { id:33, unit:'Unit 3-1', pattern:'〜がたい', english:'Hard to do / Difficult to... (psychological)',
    meaning:'Used to express that something is psychologically or emotionally hard to do, even if one tries.',
    structure:'[動詞ます形(〜ます)] ＋ がたい',
    examples:[
      { jp:'彼がそんな犯罪を犯したなんて、信じがたい出来事だ。', en:'It is hard to believe that he committed such a crime.' },
      { jp:'幼い頃の思い出の場所は、私にとって手放しがたい大切な家です。', en:'The place full of childhood memories is a precious home that is hard for me to let go of.' }
    ],
    note:'⚠️ Cannot use for lack of ability (×泳げない etc.). Focus is psychological difficulty.',
    compareTo:'〜にくい (physical difficulty); づらい (unpleasant to do); がたい (psychologically near-impossible)'
  },
  { id:34, unit:'Unit 3-1', pattern:'〜得ない', english:'Impossible / Cannot possibly happen',
    meaning:'Expresses that something is objectively impossible — zero possibility based on facts or logic.',
    structure:'[動詞ます形(〜ます)] ＋ 得ない (えない)',
    examples:[
      { jp:'しっかりと準備をしたのだから、今回の計画に失敗はあり得ない。', en:'Since we prepared thoroughly, failure is impossible for this plan.' },
      { jp:'あの真面目な彼が嘘をつくなんて、考え得ないことだ。', en:'It is unthinkable that a serious person like him would tell a lie.' }
    ],
    note:'⚠️ Affirmative is 〜得る (える/うる); Negative is always 〜得ない (えない, never うない).',
    compareTo:'〜わけがない (subjective strong denial); 得ない is objective/logical impossibility'
  },
  { id:35, unit:'Unit 3-1', pattern:'〜あまり', english:'So much that... / Out of extreme...',
    meaning:'Expresses that an extreme emotion or state leads to an unusual or unintended result.',
    structure:'[動詞辞書形・た形 / な形-な / 名詞-の] ＋ あまり (※い形 → nominalize: うれしさのあまり)',
    examples:[
      { jp:'合格の知らせを聞き、うれしさのあまり涙が溢れてしまった。', en:'Upon hearing the news of passing, tears overflowed out of sheer joy.' },
      { jp:'緊張のあまり、面接で自分の名前を言い間違えてしまった。', en:'Out of extreme nervousness, I misspoke my own name during the interview.' }
    ],
    note:'End of sentence often has uncontrollable/unconscious actions or bad results. い形 adjectives need nominalization.',
    compareTo:'〜てたまらない (can\'t stand the feeling); あまり emphasizes the consequence/result of excess'
  },
  { id:36, unit:'Unit 3-1', pattern:'〜こととなると', english:'When it comes to... (sudden attitude change)',
    meaning:'Used to indicate that someone\'s attitude or intensity suddenly changes when a specific topic is brought up.',
    structure:'[名詞-の / 動詞辞書形] ＋ こととなると',
    examples:[
      { jp:'彼は普段はおとなしいが、アニメのこととなると急に早口で喋り出す。', en:'He is usually quiet, but when it comes to anime, he suddenly starts talking fast.' },
      { jp:'お金のこととなると、あの人は途端に厳しくなる。', en:'When it comes to money, that person suddenly becomes very strict.' }
    ],
    note:'The second clause usually describes an unusual, atypical behavior (becomes intense, angry, talkative).',
    compareTo:'〜に関しては (just mentions a topic neutrally); こととなると implies personality/attitude shift'
  },
  { id:37, unit:'Unit 3-1', pattern:'〜つつある', english:'In the process of... / Gradually -ing (formal)',
    meaning:'Expresses the fact that a gradual change is currently in progress.',
    structure:'[動詞ます形(〜ます)] ＋ つつある',
    examples:[
      { jp:'日本の人口は、年々減少しつつある。', en:'The population of Japan is gradually decreasing year by year.' },
      { jp:'医療の進歩により、かつては治らなかった病気も克服されつつある。', en:'With advances in medical care, diseases that were once incurable are now being overcome.' }
    ],
    note:'⚠️ Cannot use with instant/non-gradual actions (食べる、読む). Used for slow changes (増える、減る、変わる).',
    compareTo:'〜ている (general ongoing state); つつある emphasizes gradual change in progress'
  },
  { id:38, unit:'Unit 3-1', pattern:'〜ては(〜ては)', english:'Whenever... / Keeps doing... (repeated pattern)',
    meaning:'Expresses that whenever a certain action occurs, another action always follows — a repeated pattern.',
    structure:'[動詞て形] ＋ は',
    examples:[
      { jp:'雨が降っては止み、降っては止み、すっきりしない天気だ。', en:'Whenever it rains, it stops, then starts again; it\'s an unsettling weather.' },
      { jp:'幼い子供が、引き出しを開けては閉め、開けては閉めして遊んでいる。', en:'A young child is playing by opening and closing the drawer again and again.' }
    ],
    note:'⚠️ Cannot be used for one-time events. Connects two contrasting repeated actions (open→close, write→erase).',
    compareTo:'〜たびに (every time something happens); ては〜ては emphasizes the back-and-forth repetition'
  },
  { id:39, unit:'Unit 3-1', pattern:'〜てこそ', english:'Only after doing... / It is only when...',
    meaning:'Emphasizes that a true value or meaning is realized only after a certain action is taken.',
    structure:'[動詞て形] ＋ こそ',
    examples:[
      { jp:'体は資本だから、健康であってこそ、良い仕事ができる。', en:'The body is your capital, so it is only when you are healthy that you can do good work.' },
      { jp:'冬に雪があってこそ北海道だ。', en:'It\'s only with snow in winter that it truly feels like Hokkaido.' }
    ],
    note:'⚠️ Cannot be used for mere past facts. The speaker makes a strong value assertion.',
    compareTo:'〜て初めて (first time realization); てこそ adds the speaker\'s strong judgment/value claim'
  },
  { id:40, unit:'Unit 3-1', pattern:'〜というものだ', english:'It truly is... / That\'s what you call...',
    meaning:'Used to express the speaker\'s strong assertion, common sense, or the true nature of something.',
    structure:'[普通形(な形・名詞は「だ」省略多)] ＋ というものだ',
    examples:[
      { jp:'プロの歌手がステージで歌詞を忘れるのは、プロ失格というものだ。', en:'For a professional singer to forget the lyrics on stage is naturally a disqualification as a professional.' },
      { jp:'困ったときにいつでも助け合えるのが、本当の友達というものだ。', en:'Being able to help each other whenever you are in trouble is what you truly call a real friend.' }
    ],
    note:'⚠️ Cannot be used for the speaker\'s own personal emotions (×私は悲しいというものだ).',
    compareTo:'〜というものは (sets up the topic/essence); というものだ asserts what something truly IS'
  }

  // ════════════════════════════════════════════
  //  ADD NEW UNITS BELOW THIS LINE
  //  Next id to use: 49
  //  Next unit label: Unit 4-1
  // ════════════════════════════════════════════
{ id:41, unit:'Unit 3-2', pattern:'〜にしろ(〜にしろ)', english:'Whether... or... / Even if...',
    meaning:'Used to show that the conclusion remains the same regardless of which example or situation applies.',
    structure:'[普通形(な形・名詞は「だ」を省くか「である」)] ＋ にしろ',
    examples:[
      { jp:'参加するにしろしないにしろ、明日までに返事をください。', en:'Whether you participate or not, please give me an answer by tomorrow.' },
      { jp:'理由が何にしろ、無断で約束を破るのはよくない。', en:'Whatever the reason may be, it is not good to break an appointment without notice.' }
    ],
    note:'「にせよ」「にしても」も同じ意味で使われる。More formal than 〜ても〜ても. Used to present contrasting examples that lead to the same conclusion.',
    compareTo:'〜ても〜ても (same meaning, casual daily use); にしろ〜にしろ is more formal and emphasizes the contrast between two listed examples'
  },
  { id:42, unit:'Unit 3-2', pattern:'〜に沿って', english:'Along with... / In accordance with...',
    meaning:'Used to express taking action in strict accordance with a standard, manual, plan, or path.',
    structure:'[名詞] ＋ に沿って',
    examples:[
      { jp:'このガイドラインに沿って、イベントの準備を進めてください。', en:'Please proceed with the event preparations in accordance with this guideline.' },
      { jp:'線路に沿って歩いていくと、右側に大きな公園が見えます。', en:'If you walk along the train tracks, you will see a large park on your right.' }
    ],
    note:'「計画・マニュアル・方針・期待」などの名詞がよく使われる。Implies fitting closely to a standard or path rather than merely following orders.',
    compareTo:'〜に従って (implies obedience to instructions/rules); に沿って has a nuance of aligning closely with a standard or route'
  },
  { id:43, unit:'Unit 3-2', pattern:'〜かねる', english:'Cannot / Unable to do... (polite refusal)',
    meaning:'Used as a polite or formal way to refuse or express inability to do something due to certain circumstances.',
    structure:'[動詞のます形(ますを除く)] ＋ かねる',
    examples:[
      { jp:'お客様の個人情報に関しましては、私共ではお答えいたしかねます。', en:'Regarding customers\'s personal information, we are unable to answer.' },
      { jp:'どちらの服も素敵なので、どちらを買うか決めかねています。', en:'Both clothes are wonderful, so I\'m having a hard time deciding which one to buy.' }
    ],
    note:'⚠️ Cannot use when unable due to lack of ability (×英語が話しかねる). Used in business to softly decline while showing willingness in spirit. Very common in formal/business settings.',
    compareTo:'〜できません (direct refusal); かねる is an indirect, face-saving refusal implying "I would like to but circumstances prevent me"'
  },
  { id:44, unit:'Unit 3-2', pattern:'〜ないこともない', english:'It\'s not impossible to... / Not that I can\'t...',
    meaning:'Used as a double negative to express a weak affirmation or a slight possibility. "It\'s not that I absolutely cannot."',
    structure:'[動詞のない形 / い形-くない / な形-でない / 名詞-でない] ＋ こともない',
    examples:[
      { jp:'辛い料理は苦手ですが、カレーライスなら食べられないこともないです。', en:'I\'m not good with spicy food, but it\'s not that I can\'t eat curry rice.' },
      { jp:'少し遠いですが、ここから駅まで歩いて行けないこともないですよ。', en:'It is a bit far, but it\'s not impossible to walk to the station from here.' }
    ],
    note:'「〜ないことはない」と言い換えることもできる。Expresses reluctant or hedged agreement — not 100% confident. Different from clearly affirming 〜できる or 〜だ.',
    compareTo:'〜できる / 〜だ (clear affirmation); ないこともない is a cautious, indirect "I suppose it\'s possible"'
  },
  { id:45, unit:'Unit 3-2', pattern:'〜てほしいものだ', english:'I strongly hope that... / I really want (others) to...',
    meaning:'Used to express a strong, heartfelt desire or hope for a situation or someone else\'s action. Often used for social or political wishes.',
    structure:'[動詞のて形 / ない形-て] ＋ ほしいものだ',
    examples:[
      { jp:'若者たちが選挙に関心を持ち、もっと投票に行ってほしいものだ。', en:'I strongly hope that young people will take an interest in elections and go to vote more.' },
      { jp:'これ以上物価が上がらないでほしいものだと切に願う。', en:'I earnestly wish that prices would stop rising any further.' }
    ],
    note:'⚠️ Cannot be used for personal small requests (×ペンを貸してほしいものだ). Used for broader social, political, or general wishes toward others\' behaviour.',
    compareTo:'〜てください / 〜てほしい (direct requests to someone); てほしいものだ is an indirect, broader societal wish not directed at one specific person'
  },
  { id:46, unit:'Unit 3-2', pattern:'〜だけのことはある', english:'No wonder... / It\'s worth it / As expected from...',
    meaning:'Used to express admiration or understanding that a wonderful result matches its expected cause, effort, or status.',
    structure:'[動詞・い形の普通形 / な形-な / 名詞] ＋ だけのことはある',
    examples:[
      { jp:'彼は10年も日本に住んでいるだけのことはある。日本語がペラペラだ。', en:'No wonder he has lived in Japan for 10 years; his Japanese is fluent.' },
      { jp:'この料理は高いだけのことはある。素材が新鮮で本当に美味しい。', en:'This dish is worth its high price; the ingredients are fresh and truly delicious.' }
    ],
    note:'⚠️ Only used for positive results or compliments. Cannot be used for bad outcomes or low evaluations.',
    compareTo:'さすが〜だ (simple admiration); だけのことはある explains WHY the good result is justified — the effort/status/experience behind it'
  },
  { id:47, unit:'Unit 3-2', pattern:'〜てみせる', english:'I will definitely show you that I can... / I will prove it',
    meaning:'Used to declare a strong determination to achieve something and prove it to others through actions.',
    structure:'[動詞のて形] ＋ みせる',
    examples:[
      { jp:'次の試験では、死に物狂いで勉強して絶対に合格してみせる。', en:'In the next exam, I will study like crazy and definitely show you that I can pass.' },
      { jp:'今はまだ小さな店だが、いつか世界一のレストランにしてみせる。', en:'It\'s still a small shop now, but I will make it the best restaurant in the world no matter what.' }
    ],
    note:'⚠️ Only used for the speaker\'s own strong determination. Cannot be used for other people\'s actions or simple plans.',
    compareTo:'〜ようと思う / 〜つもりだ (internal plans); てみせる is a public declaration of determination directed outward to prove oneself'
  },
  { id:48, unit:'Unit 3-2', pattern:'〜を契機に', english:'Taking the opportunity of... / With... as a turning point',
    meaning:'Used to express that a major event or incident serves as a turning point that brings about a significant change.',
    structure:'[名詞] ＋ を契機に / を契機として (動詞に接続する場合は「〜の」を挟む)',
    examples:[
      { jp:'大病を患ったのを契機に、彼はそれまでの生活習慣を完全に改めた。', en:'Taking his serious illness as a turning point, he completely changed his former lifestyle habits.' },
      { jp:'新製品のヒットを契機に、我が社は海外進出を果たすことができた。', en:'With the hit of the new product as an opportunity, our company was able to expand overseas.' }
    ],
    note:'後ろには、何かが新しく始まったり、大きく変化したりする文が来る。Used for significant life or social events — not trivial daily triggers.',
    compareTo:'〜をきっかけに (same meaning, can be used for small everyday events); を契機に is more formal and reserved for major turning points'
  },
];
