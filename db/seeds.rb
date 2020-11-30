# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Activity.destroy_all
Destination.destroy_all
User.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@gmail.com', password: '123456')

puts "#{User.count} users created"

@destination1 = Destination.create!(
  country_name: 'Iceland', 
  description: 'Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields. Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks. Most of the population lives in the capital, Reykjavik, which runs on geothermal power and is home to the National and Saga museums, tracing Iceland’s Viking history.', 
  hero_img: 'https://www.visamonthly.com/wp-content/uploads/2020/09/reykjavik-iceland-1800x1000-1.jpg', 
  about_img: 'https://www.telegraph.co.uk/content/dam/Travel/2018/April/iceland-spring-GettyImages-816855718-xlarge.jpg')
  

@destination2 = Destination.create!(
  country_name: 'Turks & Caicos', 
  description: 'Turks and Caicos is an archipelago of 40 low-lying coral islands in the Atlantic Ocean, a British Overseas Territory southeast of the Bahamas. The gateway island of Providenciales, known as Provo, is home to expansive Grace Bay Beach, with luxury resorts, shops and restaurants. Scuba-diving sites include a 14-mile barrier reef on Provo’s north shore and a dramatic 2,134m underwater wall off Grand Turk island.', 
  hero_img: 'https://honeymoonexpocenter.com/wp-content/uploads/2018/05/3.jpg', 
  about_img: 'https://www.libertytravel.com/sites/default/files/styles/full_size/public/Turks%20and%20Cacos_hero.png?itok=YNH_3X87')

@destination3 = Destination.create!(
  country_name: 'Puerto Rico', 
  description: 'Puerto Rico is a Caribbean island and unincorporated U.S. territory with a landscape of mountains, waterfalls and the El Yunque tropical rainforest. In San Juan, the capital and largest city, the Isla Verde area is known for its hotel strip, beach bars and casinos. Its Old San Juan neighborhood features colorful Spanish colonial buildings and El Morro and La Fortaleza, massive, centuries-old fortresses.', 
  hero_img: 'https://cdn2.civitatis.com/puerto-rico/san-juan/tour-viejo-san-juan-bacardi.jpg', 
  about_img: 'https://www.telegraph.co.uk/content/dam/Travel/hotels/2020/February/san-juan-cruise-port-guide-lead.jpg')

puts "#{Destination.count} destinations created"


@activity1 = Activity.create!(
  name: 'Visit Hallgrímskirkja',
  description: 'This church’s stark concrete façade was designed to mimic the Icelandic landscape. It’s the tallest building in Reykjavík, and, for a small fee, you can go up to the top to get incredible shots of the city and its multicolored rooftops.',
  img_url: 'https://i0.wp.com/www.icelandwonder.com/wp-content/uploads/2017/08/hallgrimskirkja_iceland.jpg?fit=758%2C398',
  price: 7.50,
  activity_url: 'hallgrimskirkja.is',
  user: @admin,
  destination: @destination1
)

@activity2 = Activity.create!(
  name: 'Visit Perlan',
  description: 'This dome-shaped building called “The Pearl” offers another great place to get a view of the city and houses a museum. On clear days you can see as far as Snæfellsjökull, the 700,000-year-old glacier-capped volcano that sits on the western coast of the island. Inside the dome, there is a cocktail bar and restaurant, so it makes for a nice place to go out and enjoy the view.',
  img_url: 'https://www.mustsee.is/wp-content/uploads/2017/06/perlan-5.jpg',
  price: 30.00,
  activity_url: 'https://perlan.is/',
  user: @admin,
  destination: @destination1
)

@activity3 = Activity.create!(
  name: 'Visit Grace Bay Beach',
  description: 'Rated the 2nd best beach in the world, visit the acclaimed public white-sand beach featuring calm waters & easy access to island resorts.',
  img_url: 'https://www.visittci.com/thing/grace-bay-beach-pr/default_600x400.jpg',
  price: 0.00,
  activity_url: 'https://www.visittci.com/providenciales/grace-bay-beach',
  user: @admin,
  destination: @destination2
)

@activity4 = Activity.create!(
  name: 'Visit Old San Juan',
  description: 'Easy to navigate and walk around, the city’s signature different-colored buildings and architecture are endlessly unique and fascinating. Just taking a walk around and visiting different shops and cafes is well worth your time, and as a bonus there are trolleys that take you around town for free! Make sure to visit popular sights in downtown Old San Juan you can explore free of charge.',
  img_url: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6c/4b/1c.jpg',
  price: 0.00,
  activity_url: 'https://sanjuanpuertorico.com/old-san-juan/',
  user: @admin,
  destination: @destination3
)

@activity5 = Activity.create!(
  name: 'Laguna Grande Bioluminescent Bay Tour',
  description: 'One of three bioluminescent bays in Puerto Rico, take a nighttime kayaking tour to see the bay glow fluorescent.',
  img_url: 'https://nqgeg3y5kb32yya2i47psel8-wpengine.netdna-ssl.com/wp-content/uploads/2012/03/bio-bay-kayak.jpg',
  price: 55.00,
  activity_url: 'https://www.tripadvisor.com/AttractionProductReview-g612474-d15754727-Bioluminescent_Bay_Night_Kayaking_Tour_5_30pm_Laguna_Grande_Fajardo-Fajardo_Puerto.html',
  user: @admin,
  destination: @destination3
)

puts "#{Activity.count} activities created"