DROP DATABASE IF EXISTS news_app;

CREATE DATABASE news_app;

\connect news_app;

CREATE TABLE users (
  id INTEGER GENERATED ALWAYS AS IDENTITY,
  username CHARACTER VARYING UNIQUE,
  admin BOOLEAN DEFAULT FALSE,
  PRIMARY KEY(id)
);

CREATE TABLE news (
  id INTEGER GENERATED ALWAYS AS IDENTITY,
  category CHARACTER VARYING NOT NULL,
  source CHARACTER VARYING NOT NULL,
  author CHARACTER VARYING NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  url TEXT NOT NULL,
  urlToImage TEXT NOT NULL,
  publishedOn CHARACTER VARYING NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE favorites(
  id INTEGER GENERATED ALWAYS AS IDENTITY,
  userID INTEGER,
  newsID INTEGER,
  CONSTRAINT fk_news
    FOREIGN KEY(newsID)
      REFERENCES news(id)
      ON DELETE CASCADE,
  CONSTRAINT fk_users
    FOREIGN KEY(userID)
      REFERENCES users(id)
      ON DELETE CASCADE
);

CREATE INDEX ON favorites(userID);
CREATE INDEX ON news(category);
CREATE INDEX ON users(username);
CREATE UNIQUE INDEX idx_favorites ON favorites(userID, newsID);

INSERT INTO users(username, admin) VALUES ('phiAgent', TRUE);

INSERT INTO news(category, source, author, title, description, url, urlToImage, publishedOn) VALUES
('business','MarketWatch', 'Claudia Assis','GameStop stock falls after retailer swings to surprise Q4 loss, confirms NFT marketplace plans - MarketWatch', 'Shares of GameStop Corp. undefined fell more than 8% in the extended session Thursday after the specialty retailer swung to a surprise quarterly loss and...','https://www.marketwatch.com/story/gamestop-stock-falls-after-retailer-swings-to-surprise-q4-loss-confirms-nft-marketplace-plans-2022-03-17','https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg', '2022-03-17T21:18:00Z'),
('business', 'Daily Mail', 'Gina Martinez', 'Chick-fil-A may be declared a public nuisance by the city of Santa Barbara due to drive-thru lines - Daily Mail', 'Santa Barbara officials are close to declaring a busy Chick-fil-A a public nuisance due to traffic safety concerns caused by the restaurants long drive-thru lines.', 'https://www.dailymail.co.uk/news/article-10624839/Chick-fil-declared-public-nuisance-city-Santa-Barbara-drive-lines.html', 'https://i.dailymail.co.uk/1s/2022/03/17/20/55490249-0-image-a-14_1647549993124.jpg', '2022-03-17T21:01:26Z'),
  ('business', 'New York Times', 'Kellen Browning', 'Uber, Lyft Drivers Struggle With High Gas Prices - The New York Times', 'Some drivers say they find it hard to justify spending hours on the road for Uber or Lyft as fuel costs continue to tick upward.', 'https://www.nytimes.com/2022/03/17/technology/gas-prices-uber-lyft-drivers.html', 'https://static01.nyt.com/images/2022/03/17/multimedia/17gig-gas1/17gig-gas1-facebookJumbo.jpg', '2022-03-17T20:31:50Z'),
  ('business', 'Yahoo Entertainment', 'Business Wire', 'FedEx Corp. Reports Higher Third Quarter Earnings - Yahoo Finance', 'MEMPHIS, Tenn., March 17, 2022--FedEx Corp. (NYSE: FDX) today reported financial results for the quarter ended February 28.', 'https://finance.yahoo.com/news/fedex-corp-reports-higher-third-200300859.html', 'https://s.yimg.com/uu/api/res/1.2/h0a5haj1JLrSUPGqD8oDIg--~B/aD0xMDE7dz0yMDY7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/business-wire.com/9959989503cc83561a84003d5e8f07d4', '2022-03-17T20:03:00Z'),
  ('business', 'CNN', 'Matt Egan, CNN Business', 'Koch Industries: Here is why we are staying in Russia - CNN', 'Koch Industries, the conglomerate run by billionaire Charles Koch, is planning to stay in Russia even as hundreds of Western companies have scaled back operations there following the invasion of Ukraine.', 'https://www.cnn.com/2022/03/17/investing/koch-russia/index.html', 'https://cdn.cnn.com/cnnnext/dam/assets/220317140351-charles-koch-file-restricted-super-tease.jpg', '2022-03-17T19:42:00Z'),
  ('business', 'CNBC', 'Annie Palmer', 'Amazon Flex drivers hit by surging gas prices are demanding relief after Uber, Lyft offer help - CNBC', 'On Wednesday, Flex drivers rallied outside of an Amazon warehouse in Southern California to ask the company to increase pay because of rising gas prices.', 'https://www.cnbc.com/2022/03/17/amazon-flex-drivers-hit-by-surging-gas-prices-are-demanding-relief-.html', 'https://image.cnbcfm.com/api/v1/image/107031812-1647483018931-Image_from_iOS.jpg?v=1647483145&w=1920&h=1080', '2022-03-17T19:15:48Z'),
  ('business', 'CNBC', 'Kate Dore, CFP®', 'Americans are pausing investments because of the Russia-Ukraine war. Here is what it could cost them - CNBC', 'The ongoing Russia-Ukraine war is hurting Americas financial outlook, causing many to pause investing, according to a survey. Here is why that is a problem.', 'https://www.cnbc.com/2022/03/17/americans-are-pausing-investments-because-of-the-russia-ukraine-war.html', 'https://image.cnbcfm.com/api/v1/image/107023802-1646234560545-GettyImages-647336683.jpg?v=1646234638&w=1920&h=1080', '2022-03-17T19:09:42Z'),
  ('business', 'MarketWatch', 'Frances Yue', 'Why have not we seen the rise of next Dogecoin or Shiba Inu? Here are three main reasons - MarketWatch', 'Crypto investors are moving funds from smaller projects to bitcoin, which is seen as a “flight to safety,” analysts say.', 'https://www.marketwatch.com/story/why-havent-we-seen-the-rise-of-next-dogecoin-or-shiba-inu-here-are-three-main-reasons-11647540555', 'https://images.mktw.net/im-429485/social', '2022-03-17T19:09:00Z'),
  ('business', 'CNN', 'Paul R. La Monica, CNN Business', 'Warren Buffetts Berkshire Hathaway is making a huge bet on this oil company - CNN', 'The Oracle of Omaha is making an even bigger bet on a major oil company as crude prices continue to surge.', 'https://www.cnn.com/2022/03/17/investing/berkshire-hathaway-warren-buffett-occidental-petroleum/index.html', 'https://cdn.cnn.com/cnnnext/dam/assets/210623073725-01-warren-buffett-2019-file-super-tease.jpg', '2022-03-17T18:43:47Z'),
  ('business', 'CNBC', 'Robert Frank', 'A million new millionaires were created in U.S. last year, and the richest got richer, report says - CNBC', 'The roaring stock market and crypto gains created more than a million new millionaires in the U.S. last year, according to a new report.', 'https://www.cnbc.com/2022/03/17/million-new-millionaires-were-created-in-us-last-year-report-says.html', 'https://image.cnbcfm.com/api/v1/image/106802203-1623342920737-106802203-1606309030811-wall.jpg?v=1623342931&w=1920&h=1080', '2022-03-17T18:17:09Z'),
('technology', 'TechCrunch', 'Alex Wilhelm', 'Daily Crunch: $8.5B Amazon-MGM merger will bring thousands of titles to Prime Video', 'Hello friends and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.', 'https://techcrunch.com/2022/03/17/daily-crunch-8-5b-amazon-mgm-merger-will-bring-thousands-of-titles-to-prime-video/', 'https://techcrunch.com/wp-content/uploads/2022/03/amazon-mgm.webp?w=711', '2022-03-17T22:30:49Z'),
  ('technology', 'TechCrunch', 'Marcelo Wiermann', 'How to hire great engineers when you don not have any technical expertise', 'Recruiting a winning engineering team can be intimidating, especially for first-time and non-technical founders.', 'https://techcrunch.com/2022/03/17/how-to-hire-great-engineers-when-you-dont-have-any-technical-expertise/', 'https://techcrunch.com/wp-content/uploads/2022/03/GettyImages-1300261958.jpg?w=600', '2022-03-17T21:59:08Z'),
  ('technology', 'TechCrunch', 'Aisha Malik', 'PayPal expands services to allow users to send money to Ukrainians', 'PayPal is expanding its services to allow its users to send money to Ukrainians, the company announced on Thursday. Prior to this expansion, users in Ukraine could only use PayPal to send money out of the country. The expansion allows Ukrainian PayPal account…', 'https://techcrunch.com/2022/03/17/paypal-allow-customers-send-money-ukrainians/', 'https://techcrunch.com/wp-content/uploads/2021/02/GettyImages-1184251295.jpg?w=600', '2022-03-17T21:56:06Z'),
  ('technology', 'TechCrunch', 'Amanda Silberling', 'Flickr is paywalling the ability to upload NSFW photos', 'Flickr isn’t very good at making money, but as the old adage goes, sex sells. So, in an attempt to draw in more paying subscribers, Flickr changed its content guidelines to only allow Flickr Pro users to post “restricted” or “moderate” content, which includes…', 'https://techcrunch.com/2022/03/17/flickr-paywall-nsfw-photos/', 'https://techcrunch.com/wp-content/uploads/2018/11/flickr-logo-watercolor.jpg?w=711', '2022-03-17T21:39:24Z'),
  ('technology', 'TechCrunch', 'Emma Betuel', 'Injectsense collects $1.7M grant for its eye implant smaller than a grain of rice', 'If you were to accidentally drop the eye sensor developed by Injectsense you’d have little chance of finding it. Ariel Cao, the founder and CEO, admits as much. But once its been implanted into the back of your eye, it can remain there, basically immobile fo…', 'https://techcrunch.com/2022/03/17/injectsense-collects-1-7m-grant-for-its-eye-implant-smaller-than-a-grain-of-rice/', 'https://techcrunch.com/wp-content/uploads/2022/03/injectsense-sensor-scale.jpg?w=607', '2022-03-17T21:19:37Z'),
  ('technology', 'TechCrunch', 'Ben Tigner', '4 eVTOL trends moving the air taxi industry closer to takeoff', 'The billions raised by eVTOL companies last year mean one thing for 2022 – massive growth. These trends will influence how entrepreneurs and investors participate in the burgeoning eVTOL ecosystem.', 'https://techcrunch.com/2022/03/17/4-evtol-trends-moving-the-air-taxi-industry-closer-to-takeoff/', 'https://techcrunch.com/wp-content/uploads/2022/03/GettyImages-1236492043.jpg?w=641', '2022-03-17T19:50:50Z'),
  ('technology', 'TechCrunch', 'Taylor Hatmaker', 'Elden Ring made me a From Software believer', 'Elden Ring is the latest game in the storied tradition of punishing, mysterious titles by developer From Software, following fiercely-loved hits like the Dark Souls series and Bloodborne. Ive wanted to love these games for a long time. Ive followed the rele…', 'https://techcrunch.com/2022/03/17/elden-ring-review-from-software-gaming-experience/', 'https://techcrunch.com/wp-content/uploads/2022/03/elden-ring-2.jpeg?w=711', '2022-03-17T19:16:26Z'),
  ('technology', 'TechCrunch', 'Brian Heater', 'The gyms have reopened, but investors are still betting on Hydrows home rower', 'The home fitness craze has, predictably, died down somewhat since the height of pandemic-fueled buying sprees. Category leader Peloton is smarting from gym reopenings (among lots of other things) in a major way. Still, connected fitness predates COVID-19, and…', 'https://techcrunch.com/2022/03/17/the-gyms-have-reopened-but-investors-are-still-betting-on-hydrows-home-rower/', 'https://techcrunch.com/wp-content/uploads/2022/03/Hydrow_Fall_2020_DSCF1806_LIGHT.jpg?w=600', '2022-03-17T18:39:50Z'),
  ('technology', 'TechCrunch', 'Aisha Malik', 'Meta to test new tools to give brands control over ad placement on its platforms later this year', 'Meta, formerly known as Facebook, says it will begin testing new content tools designed to give advertisers control over where their ads are shown on Facebook and Instagram feeds, the company announced on Thursday. The tools will allow companies to prevent th…', 'https://techcrunch.com/2022/03/17/meta-test-tools-brands-control-over-ad-placement-platform/', 'https://techcrunch.com/wp-content/uploads/2021/11/facebook-meta-rotate-pattern.jpg?w=711', '2022-03-17T18:30:55Z'),
  ('technology', 'TechCrunch', 'Brian Heater', 'To Servi man', 'A nice secondary effect of writing this newsletter is getting an influx of responses when I write on a specific topic. Last week it was agtech. I expressed a bit of disappointment in the category. So many robotics firms have either failed or been acquired. Th…', 'https://techcrunch.com/2022/03/17/to-servi-man/', 'https://techcrunch.com/wp-content/uploads/2022/03/minicheetah_climb.jpg?w=533', '2022-03-17T18:30:26Z'),
  ('world news', 'Themoneyillusion.com', 'ssumner', 'What Powell should say about wages', 'This Bloomberg headline caught my eye:\n\n\n\nPowell Treads Tricky Path in Saying Wages Are Rising Too Fast\n\n\n\nHe is right.  Here is how Powell should frame the issue:\n\n\n\n1.  Rapid real wage growth is good; it leads to higher living standards for average Americans.…', 'https://www.themoneyillusion.com/what-powell-should-say-about-wages/', 'https://en.wikipedia.org/wiki/Colin_Powell#/media/File:Colin_Powell_official_Secretary_of_State_photo.jpg', '2022-03-17T22:53:12Z'),
  ('world news', 'Sport.orf.at', 'ORF.at', 'Hinteregger schießt Frankfurt weiter', 'Eintracht Frankfurt hat das Viertelfinale der UEFA Europa League erreicht. Dank eines Treffers von ÖFB-Legionär Martin Hinteregger (121.) kam der deutsche Bundesligist am Donnerstag vor 25.000 Zuschauern im Achtelfinal-Rückspiel gegen Betis Sevilla zu einem 1…', 'https://sport.orf.at/stories/3093204/', 'https://ibs.orf.at/sport?image=https%3A%2F%2Fassets.orf.at%2Fmims%2F2022%2F12%2F90%2Fcrops%2Fw%3D1200%2Ch%3D630%2Cq%3D75%2F1280384_master_457090_fus_el_achtel_rueck_frankfurt_afp.jpg%3Fs%3D8c8f4d30305105bbe4da012d5c362786ccaa0704', '2022-03-17T22:51:55Z'),
  ('world news', 'The New Yorker', 'Isaac Chotiner', 'Classical Music’s Iron Curtain', 'Isaac Chotiner interviews the musicologists Kira Thurman and Emily Richmond Pollock about national identity in the performing arts and the politics of blacklisting amid Russia’s invasion of Ukraine.', 'https://www.newyorker.com/culture/q-and-a/classical-musics-iron-curtain', 'https://media.newyorker.com/photos/62336d5fba11377ca2a71f7f/16:9/w_1280,c_limit/Chotiner-Kira-Thurman.jpg', '2022-03-17T22:50:59Z'),
  ('world news', 'Wnd.com', 'WND Guest Columnist', 'Ukraine: Money-laundering hub of the New World Order', 'By Shari Goodman Since the Russian invasion of Ukraine about three weeks ago, our corporate media has been cheering on Ukrainian President Volodymyr Zelensky and the Ukrainians while demonizing Russia and Putin as another Hitler. What the media fail to cover …', 'https://www.wnd.com/2022/03/ukraine-money-laundering-hub-new-world-order/', 'https://www.wnd.com/wp-content/uploads/2021/09/schwab-great-reset.jpg', '2022-03-17T22:50:02Z'),
  ('world news', 'Independent', 'Alex Pattle', 'Andriy Yarmolenko hits extra-time winner as West Ham progress to Europa League quarter-finals', 'West Ham 2-0 (agg. 2-1) Sevilla: Tomas Soucek put the Hammers ahead before the Ukrainian’s goal in extra-time secured their path into the last eight', 'https://www.independent.co.uk/sport/football/west-ham-sevilla-result-europa-league-yarmolenko-b2038575.html', 'https://static.independent.co.uk/2022/03/17/22/urnpublicidap.orgd4f57d7f594c41799a0e76e21c91c03f.jpg?quality=75&width=1200&auto=webp', '2022-03-17T22:49:19Z'),
  ('world news', 'National Review', 'Isaac Schorr, Isaac Schorr', 'Ben Sasse and Chris Murphy Clash in Heated Senate Debate over Ukrainian Aid, Political Grandstanding', 'The testy back-and-forth violated Senate rules.','https://www.nationalreview.com/news/ben-sasse-and-chris-murphy-clash-in-heated-senate-debate-over-ukrainian-aid-political-grandstanding/', 'https://www.nationalreview.com/wp-content/uploads/2022/03/BenSasseChrisMurphy.jpg?fit=2057%2C1200', '2022-03-17T22:49:00Z'),
  ('world news', 'Www.bt.dk', 'pesc@bt.dk (Peter Schulz)', 'EU-lande har kastet utroligt milliardbeløb efter russisk naturgas og olie – efter krigens udbrud', '»Naturgasprisen er steget voldsomt i år, og det betyder, at EU sender flere penge i retning af Rusland for at betale for gassen.«', 'https://www.bt.dk/udland/eu-lande-har-kastet-utroligt-milliardbeloeb-efter-russisk-naturgas-og-olie-efter', 'https://bt.bmcdn.dk/media/cache/resolve/image_960x545/image/181/1814789/24039679-ukraine-crisisportugal-energy.jpg', '2022-03-17T22:49:00Z'),
  ('world news', 'Atlas Obscura', 'Jon Favreq', 'The Immigrant Women Who Forever Changed the Way Americans Eat', 'In his debut book: Taste Makers, Mayukh Sen wants us to radically rethink culinary history. Norma Shirley never wrote a cookbook and never had her own television show. Yet the Jamaican chef and prolific restaurateur—despite working in an era when The New Yo…', 'https://www.atlasobscura.com/articles/taste-makers-immigrant-women-chefs-united-states', 'https://img.atlasobscura.com/wZrBBtF7zJozSVXvdMIiveUYgfwmqiXVKdb_21Nr7jc/rt:fit/w:600/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL2Fzc2V0/cy8zMmI3YTY5NGMx/YzUzNzZhMGNfVGFz/dGUgTWFrZXJzMS5q/cGc.jpg', '2022-03-17T22:45:00Z'),
  ('world news', 'Warnews247.gr', 'director', 'Κατάρρευση: Οι Ουκρανοί έχασαν 3 πόλεις στο Ντονμπάς – Ώρα κρίσεως για χιλιάδες στρατιώτες – Εκλιπαρεί ο Αζόφ', 'Έχασαν σημαντικά προπύργια\nΤο άρθρο Κατάρρευση: Οι Ουκρανοί έχασαν 3 πόλεις στο Ντονμπάς – Ώρα κρίσεως για χιλιάδες στρατιώτες – Εκλιπαρεί ο Αζόφ εμφανίστηκε πρώτα στο WarNews247.', 'https://warnews247.gr/katarrefsi-oi-oukranoi-echasan-3-poleis-sto-ntonbas-ora-kriseos-gia-chiliades-stratiotes-zita-voitheia-o-azof-stin-marioupoli/', 'https://warnews247.gr/wp-content/uploads/2022/02/MLRS-russia-1.jpg', '2022-03-17T22:47:57Z'),
  ('world news', 'Fark.com', 'Tolovy Yvetsky', 'How are we doing in Ukraine comrade generals? Great. Terrific. Like taking vodka from a baby. Well, President Putin, truthfully we are losin ...[click click] ... Enjoy your new assignment in the gulags former military chief comrade (possible nsfw content on page) [Obvious]', 'How are we doing in Ukraine comrade generals? Great. Terrific. Like taking vodka from a baby. Well, President Putin, truthfully we are losin ...[click click] ... Enjoy your new assignment in the gulags former military chief comrade (possible nsfw content on p…', 'https://www.fark.com/comments/12209134/How-are-we-doing-in-Ukraine-comrade-generals-Great-Terrific-Like-taking-vodka-from-a-baby-Well-President-Putin-truthfully-we-are-losin-click-click-Enjoy-your-new-assignment-in-gulags-former-military-chief-comrade-possible-nsfw-content-on-page', 'https://usrimg-full.fark.net/C/C0/fark_C0HxQS0NrI6DzC-lfMeqiTopAi8.jpg?AWSAccessKeyId=HBAYEKZHGUB4NAYQBVSQ&Expires=1647835200&Signature=M8LQ%2BdRD2HVQF%2BexidBuBNf5ztw%3D', '2022-03-17T22:46:50Z');
