const heroes = [
  {
    id: 'dc-batman',
    superhero: 'Batman',
    publisher: 'DC Comics',
    alter_ego: 'Bruce Wayne',
    first_appearance: 'Detective Comics #27',
    characters: 'Bruce Wayne',
    url: ' https://www.ecccomics.com/content/productos/9854/Batman_111_56_1a_cubierta.jpg',
  },
  {
    id: 'dc-superman',
    superhero: 'Superman',
    publisher: 'DC Comics',
    alter_ego: 'Kal-El',
    first_appearance: 'Action Comics #1',
    characters: 'Kal-El',
    url: 'https://i.pinimg.com/564x/77/67/ef/7767ef05da35050082250eabf99baf46--classic-superman.jpg',
  },
  {
    id: 'dc-flash',
    superhero: 'Flash',
    publisher: 'DC Comics',
    alter_ego: 'Jay Garrick',
    first_appearance: 'Flash Comics #1',
    characters: 'Jay Garrick, Barry Allen, Wally West, Bart Allen',
    url: 'https://i.pinimg.com/originals/70/12/fe/7012fe8aab9a5ae349df4601e5a1e1db.png',
  },
  {
    id: 'dc-green',
    superhero: 'Green Lantern',
    publisher: 'DC Comics',
    alter_ego: 'Alan Scott',
    first_appearance: 'All-American Comics #16',
    characters: 'Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz',
    url: 'https://i.pinimg.com/originals/8c/10/3b/8c103b95e2acaf564ddba1ce409dfbce.jpg',
  },
  {
    id: 'dc-arrow',
    superhero: 'Green Arrow',
    publisher: 'DC Comics',
    alter_ego: 'Oliver Queen',
    first_appearance: 'More Fun Comics #73',
    characters: 'Oliver Queen',
    url: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/34/1534805457-greenarrowjpg.jpg?resize=480:*',
  },
  {
    id: 'dc-wonder',
    superhero: 'Wonder Woman',
    publisher: 'DC Comics',
    alter_ego: 'Princess Diana',
    first_appearance: 'All Star Comics #8',
    characters: 'Princess Diana',
    url: 'https://i.pinimg.com/originals/25/f4/fb/25f4fbe181b86b9f47dd0c3c1b24c868.jpg',
  },
  {
    id: 'dc-martian',
    superhero: 'Martian Manhunter',
    publisher: 'DC Comics',
    alter_ego: "J'onn J'onzz",
    first_appearance: 'Detective Comics #225',
    characters: 'Martian Manhunter',
    url: 'https://149455152.v2.pressablecdn.com/wp-content/uploads/2020/02/MM_Cv12_var.jpg',
  },
  {
    id: 'dc-robin',
    superhero: 'Robin/Nightwing',
    publisher: 'DC Comics',
    alter_ego: 'Dick Grayson',
    first_appearance: 'Detective Comics #38',
    characters: 'Dick Grayson',
    url: 'https://comicvine.gamespot.com/a/uploads/scale_small/8/82665/1985812-nightwing_colored_by_dany_morales_d488k91.jpg',
  },
  {
    id: 'dc-blue',
    superhero: 'Blue Beetle',
    publisher: 'DC Comics',
    alter_ego: 'Dan Garret',
    first_appearance: 'Mystery Men Comics #1',
    characters: 'Dan Garret, Ted Kord, Jaime Reyes',
    url: 'http://dccontinuityproject.weebly.com/uploads/5/4/5/1/54516433/published/267035213.jpg?1642038226',
  },
  {
    id: 'dc-black',
    superhero: 'Black Canary',
    publisher: 'DC Comics',
    alter_ego: 'Dinah Drake',
    first_appearance: 'Flash Comics #86',
    characters: 'Dinah Drake, Dinah Lance',
    url: 'https://i.pinimg.com/originals/b7/2c/78/b72c783e473009ae14b5535231798cad.jpg',
  },
  {
    id: 'marvel-spider',
    superhero: 'Spider Man',
    publisher: 'Marvel Comics',
    alter_ego: 'Peter Parker',
    first_appearance: 'Amazing Fantasy #15',
    characters: 'Peter Parker',
    url: 'https://i.pinimg.com/736x/74/40/00/7440006e642978a8d44abf6f82c61632.jpg',
  },
  {
    id: 'marvel-captain',
    superhero: 'Captain America',
    publisher: 'Marvel Comics',
    alter_ego: 'Steve Rogers',
    first_appearance: 'Captain America Comics #1',
    characters: 'Steve Rogers',
    url: 'https://pm1.narvii.com/6072/a6accc9fef58647c3aa6607a712b5e6bfefa07d4_hq.jpg',
  },
  {
    id: 'marvel-iron',
    superhero: 'Iron Man',
    publisher: 'Marvel Comics',
    alter_ego: 'Tony Stark',
    first_appearance: 'Tales of Suspense #39',
    characters: 'Tony Stark',
    url: 'https://i.pinimg.com/originals/f7/a6/a9/f7a6a90aba5c0f87b820114aa37b2d0c.jpg',
  },
  {
    id: 'marvel-thor',
    superhero: 'Thor',
    publisher: 'Marvel Comics',
    alter_ego: 'Thor Odinson',
    first_appearance: 'Journey into Myster #83',
    characters: 'Thor Odinson',
    url: 'https://i.pinimg.com/564x/97/64/04/9764043fa65c2dc6d54ca4e505ffa8e1.jpg',
  },
  {
    id: 'marvel-hulk',
    superhero: 'Hulk',
    publisher: 'Marvel Comics',
    alter_ego: 'Bruce Banner',
    first_appearance: 'The Incredible Hulk #1',
    characters: 'Bruce Banner',
    url: 'https://i.pinimg.com/originals/4a/bc/a8/4abca8abdfda6359581be1153434266f.jpg',
  },
  {
    id: 'marvel-wolverine',
    superhero: 'Wolverine',
    publisher: 'Marvel Comics',
    alter_ego: 'James Howlett',
    first_appearance: 'The Incredible Hulk #180',
    characters: 'James Howlett',
    url: 'https://i.pinimg.com/736x/41/9d/2b/419d2bab56a6720226fac93349ee1c5e.jpg',
  },
  {
    id: 'marvel-daredevil',
    superhero: 'Daredevil',
    publisher: 'Marvel Comics',
    alter_ego: 'Matthew Michael Murdock',
    first_appearance: 'Daredevil #1',
    characters: 'Matthew Michael Murdock',
    url: 'https://i.pinimg.com/564x/cc/f1/b3/ccf1b3231e59bfc1b74d41d2a5a3ae13.jpg',
  },
  {
    id: 'marvel-hawkeye',
    superhero: 'Hawkeye',
    publisher: 'Marvel Comics',
    alter_ego: 'Clinton Francis Barton',
    first_appearance: 'Tales of Suspense #57',
    characters: 'Clinton Francis Barton',
    url: 'https://i.pinimg.com/564x/cc/c2/9f/ccc29f78d4c1fa045ec5ce22540f2add--avengers-marvel-marvel-heroes.jpg',
  },
  {
    id: 'marvel-cyclops',
    superhero: 'Cyclops',
    publisher: 'Marvel Comics',
    alter_ego: 'Scott Summers',
    first_appearance: 'X-Men #1',
    characters: 'Scott Summers',
    url: 'https://i.pinimg.com/originals/d4/40/7b/d4407bfc070d33d796af98c4506d5c42.png',
  },
  {
    id: 'marvel-silver',
    superhero: 'Silver Surfer',
    publisher: 'Marvel Comics',
    alter_ego: 'Norrin Radd',
    first_appearance: 'The Fantastic Four #48',
    characters: 'Norrin Radd',
    url: 'https://i.annihil.us/u/prod/marvel/i/mg/c/10/5c083bd7aa19d/clean.jpg',
  },
];

export default heroes