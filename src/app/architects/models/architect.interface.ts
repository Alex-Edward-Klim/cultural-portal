export interface Architect {
  id: string; // '1'
  path: string; // 'levin'
  name: string; // 'name'
  date: string; // 'date'
  img: string; // 'assets/images/Levin.jpg'
  videoId: string; // 'qoWJgqu47gA'
  vita: string; // 'vita'
  authorOfTheDay: string; // 'false'
  lng: string; // 'en'
  birthPlace: string; // 'birthPlace'
  geovidgetLink: string; // 'mid=1DMvXxw4BPZYozlqBwvqmgzWLMr6HpzH5'
  searchKeyEn: string; // 'Leonid Mendelevich Levin Minsk'
  searchKeyRu: string; // 'леонид менделевич левин минск'
  searchKeyBy: string; // 'леанід мендзялевіч левін мінск'
  timelineData: ArchitectTimeline[];
  work: ArchitectWork[];
}

export interface ArchitectTimeline {
  date: string; // '1954-1960'
  text: string; // 'timeline1'
}

export interface ArchitectWork {
  title: string; // 'worktitle1'
  width: number; // 53.898
  length: number; // 27.56
  date: string; // '1969'
  img: string; // '/works/Levin/Колас.jpg'
}
