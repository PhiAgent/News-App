DROP DATABASE IF EXISTS news_app;

CREATE DATABASE news_app;

\connect news_app;

CREATE TABLE users (
  id INTEGER GENERATED ALWAYS AS IDENTITY,
  username CHARACTER VARYING UNIQUE,
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

INSERT INTO users(username) VALUES ('phiAgent');

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
  (),
  (),
  (),
  (),
  (),
  (),
  (),
  (),
  (),
  ();
