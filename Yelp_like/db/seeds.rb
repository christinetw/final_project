# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
restaurants = Restaurant.create([
  { 
    name: "Aloette Restaurant",
    image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Faloetterestaurant.com%2F%3Fattachment_id%3D36&psig=AOvVaw0bLM0LeZj5oNEJjozzTEjY&ust=1637439180161000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjv08GepfQCFQAAAAAdAAAAABAD",
    location: "163 Spadina Avenue, 1st Floor, Toronto"
  }, 
  { 
    name: "George",
    image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.ca%2FLocationPhotoDirectLink-g155019-d787134-i301947512-GEORGE_Restaurant-Toronto_Ontario.html&psig=AOvVaw0bp8ec_taIfsE_D_0OJCAX&ust=1637529679805000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCo4Mrvp_QCFQAAAAAdAAAAABAD",
    location: "111C Queen Street E, Toronto"
  }, 
  { 
    name: "Canoe",
    image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.oliverbonacini.com%2Frestaurants%2Fcanoe%2F&psig=AOvVaw0iN4wOKcSrod6cMw6wuzfX&ust=1637529735648000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOitnunvp_QCFQAAAAAdAAAAABAD",
    location: "66 Wellington Street W, 54th Floor, Toronto"
  }, 
  { 
    name: "DailLo",
    image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.oliverbonacini.com%2Frestaurants%2Fcanoe%2F&psig=AOvVaw0iN4wOKcSrod6cMw6wuzfX&ust=1637529735648000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOitnunvp_QCFQAAAAAdAAAAABAD",
    location: "1503 College Street, Toronto"
  }, 
  { 
    name: "Miku",
    image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmikutoronto.com%2F&psig=AOvVaw3c9X_yr0XmULcTKU54hX_-&ust=1637529866658000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDT-KLwp_QCFQAAAAAdAAAAABAE",
    location: "10 Bay Street, 105, Toronto"
  }, 
  { 
    name: "Jacobs & Co. Steakhouse",
    image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fjacobssteakhouse%2F&psig=AOvVaw2XceWLKjsrWf9Swm9dAiWw&ust=1637529950940000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjQ8crwp_QCFQAAAAAdAAAAABAD",
    location: "12 Brant Street, Toronto"
  }, 
  { 
    name: "Fishman Lobster Clubhouse Restaurant",
    image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fflctoronto.com%2F&psig=AOvVaw3QY9jq79WKpzfKNE-F7Rin&ust=1637530019597000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDHq_Hwp_QCFQAAAAAdAAAAABAD",
    location: "4020 Finch Avenue E, Toronto"
  }, 
  { 
    name: "Sushi on Bloor",
    image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.ca%2FLocationPhotoDirectLink-g155019-d709395-i238296656-Sushi_On_Bloor-Toronto_Ontario.html&psig=AOvVaw1C80d4igG3zQicfrpwGx2o&ust=1637530192171000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICut77xp_QCFQAAAAAdAAAAABAD",
    location: "525 Bloor Street W, Toronto"
  }, 
  { 
    name: "Yasu",
    image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.ca%2FLocationPhotoDirectLink-g155019-d709395-i238296656-Sushi_On_Bloor-Toronto_Ontario.html&psig=AOvVaw1C80d4igG3zQicfrpwGx2o&ust=1637530192171000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICut77xp_QCFQAAAAAdAAAAABAD",
    location: "81 Harbord Street, Toronto"
  }, 
  { 
    name: "Kinka Izakaya",
    image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kinka.com%2Flocation%2Fkinka-izakaya-harbourfront%2F&psig=AOvVaw0Pl-DveWq2C9LQx_Rp-_4n&ust=1637530398800000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOi21aPyp_QCFQAAAAAdAAAAABAD",
    location: "398 Church Street, Toronto"
  }, 
  { 
    name: "Hokkaido Ramen Santouka",
    image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdobbernationloves.com%2Ffood-drink%2Freview-santouka-ramen-toronto%2F&psig=AOvVaw2WI4rTpiz289HIlhExVKtv&ust=1637530541580000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjowuTyp_QCFQAAAAAdAAAAABAI",
    location: "91 Dundas Street E, Toronto"
  }
])
reviews = Review.create([{
  title: 'good restaurant',
  description:'good food',
  score: 5,
  restaurant: restaurants.first
  },
  {title: 'bad restaurant',
  description:'bad service',
  score: 1,
  restaurant: restaurants.first
  }])