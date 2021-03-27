const categories = {
  genres: {
    abstract: {
      id: "abstract",
      name: "Abstract",
    },
    ambient: {
      id: "ambient",
      name: "Ambient/Chill",
    },
    dnb: {
      id: "dnb",
      name: "Drum & Bass",
    },
    dubstep: {
      id: "dubstep",
      name: "Dubstep",
    },
    electro: {
      id: "electro",
      name: "Electronic",
    },
    funk: {
      id: "funk",
      name: "Funk",
    },
    glitch: {
      id: "glitch",
      name: "Glitch-Hop",
    },
    hiphop: {
      id: "hiphop",
      name: "Hip-Hop",
    },
    house: {
      id: "house",
      name: "House",
    },
    jazz: {
      id: "jazz",
      name: "Jazz",
    },
    percussion: {
      id: "percussion",
      name: "Percussion",
    },
    pop: {
      id: "pop",
      name: "Pop",
    },
    rock: {
      id: "rock",
      name: "Rock",
    },
    trap: {
      id: "trap",
      name: "Trap",
    },
    trance: {
      id: "trance",
      name: "Trance",
    },
    world: {
      id: "world",
      name: "World",
    },
  },

  tempos: {
    vs: {
      id: "vs",
      name: "Very Slow",
      minBpm: null,
      maxBpm: 60,
    },
    slow: {
      id: "slow",
      name: "Slow",
      minBpm: 60,
      maxBpm: 90,
    },
    medium: {
      id: "medium",
      name: "Medium",
      minBpm: 90,
      maxBpm: 110,
    },
    upbeat: {
      id: "upbeat",
      name: "Upbeat",
      minBpm: 110,
      maxBpm: 140,
    },
    fast: {
      id: "fast",
      name: "Fast",
      minBpm: 140,
      maxBpm: 160,
    },
    vf: {
      id: "vf",
      name: "Very Fast",
      minBpm: 160,
      maxBpm: null,
    },
  },

  lengths: {
    1: {
      id: 1,
      name: "0-15 sec",
      minLength: null,
      maxLength: 15,
    },
    2: {
      id: 2,
      name: "16-30 sec",
      minLength: 16,
      maxLength: 30,
    },
    3: {
      id: 3,
      name: "31-60 sec",
      minLength: 31,
      maxLength: 60,
    },
    4: {
      id: 4,
      name: "1-3 min",
      minLength: 61,
      maxLength: 180,
    },
    5: {
      id: 5,
      name: "3-5 min",
      minLength: 181,
      maxLength: 300,
    },
    6: {
      id: 6,
      name: "5+ min",
      minLength: 301,
      maxLength: null,
    },
  },

  moods: {
    action: {
      id: "action",
      name: "Action"
    },
    chill: {
      id: "chill",
      name: "Chill"
    },
    dark: {
      id: "dark",
      name: "Dark"
    },
    happy: {
      id: "happy",
      name: "Happy/Cheerful"
    },
    motivation: {
      id: "motivation",
      name: "Motivational/Inspirational"
    },
    future: {
      id: "future",
      name: "Sci-fi/Future"
    },
    uplifting: {
      id: "uplifting",
      name: "Uplifting"
    },
  },

  editTypes: {
    full: {
      id: "full",
      name: "Full Track",
    },
    2: {
      id: 2,
      name: "Logo/Ident/Bumper",
    },
    loop: {
      id: "loop",
      name: "Loop",
    },
  },

  stores: {
    aj: {
      id: "aj",
      name: "AudioJungle",
    },
    me: {
      id: "me",
      name: "MotionElements",
    },
    mg: {
      id: "mg",
      name: "MusicGrid",
    },
    p5: {
      id: "p5",
      name: "Pond5",
    },
  },
};

export default categories;